const { Router } = require("express");
const router = Router();
const {addUser, findUsersBy} = require("../models/users");
const {generateToken} = require('../herlper_funcs/generateToken');
// const { compareSync } = require("bcryptjs")
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = "http://localhost:8080/login/callback";
const axios = require("axios");
const btoa = require("btoa");
const env_url = process.env.URL_ENV || "http://localhost:3000/";

let userData;

const getUser = (data, api_res) => {
  axios
    .get(`https://discordapp.com/api/v8/users/@me`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then( async (response) => {
      userData = response.data;
      user = await findUsersBy({email: userData.email}).first();
      if(!user) {
        addUser({email: userData.email});
      }
      const token = generateToken(userData);
      console.log(token)
      api_res.redirect(`${env_url}setup?token=${token}`);
    })
    .catch((err) => console.log(err));
};

const getDiscordToken = (code, creds, api_res) => {
  let data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirect,
  };
  let params = _encode(data);

  axios
    .post(`https://discordapp.com/api/oauth2/token`, params, {
      headers: {
        Authorization: `Basic ${creds}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      console.log(res.data);
      getUser(res.data, api_res);
    })
    .catch((err) => console.log(err));
};

router.get("/", (req, res) => {
  res.redirect(
    "https://discord.com/api/oauth2/authorize?client_id=850815958943268904&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin%2Fcallback&response_type=code&scope=identify%20email"
  );
});

router.get("/callback", (req, api_res) => {
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  getDiscordToken(code, creds, api_res);
});

router.get("/user", (req, res) => {
  res.json(userData);
});
function _encode(obj) {
  let string = "";

  for (const [key, value] of Object.entries(obj)) {
    if (!value) continue;
    string += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }

  return string.substring(1);
}
module.exports = router;
