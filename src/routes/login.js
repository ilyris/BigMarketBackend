const { Router } = require("express");
const router = Router();


router.post("/", async (req, res, next) => {
    // const { profileId } = req.body
    console.log(req.body);
    try {

    } catch (error) {
        console.log(error)
        next(error)
    }
})
// router.post(`/`, async (req, res, next) => {
//     let { email, password } = req.body
//     try {
//         let user
//         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
//             // check that it matches email
//             user = await findUsersBy({ email: username }).first()
//         } else if (/^\S*$/.test(username)) {
//             // check that it then matches a username with no spaces if its not an email address
//             console.log("this was an username")
//             user = await findUsersBy({ username }).first()
//         } else if (/^\S*$/.test(username) === false) {
//             res.sendStatus(401)
//             console.log("Invalid Username")
//         } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username) === false) {
//             console.log("invalid Email Address")
//             res.sendStatus(401)
//         }
//         const isCorrectPassword = await compareSync(password, user.password) // compare the req password with the returned user pass from db.

//         if (username == false || username === undefined || !isCorrectPassword) {
//             console.log("username or password was invalid.")
//             res.sendStatus(401)
//         } else if (
//             (username === user.username && isCorrectPassword) ||
//             (username === user.email && isCorrectPassword)
//         ) {
//             // Create jwt token
//             const token = generateToken(user)
//             res.json({ token })
//             console.log("Singed In")
//         }
//     } catch (error) {
//         next(error)
//     }
// })
// router.get("/", async (req, res, next) => {
//     // const { profileId } = req.body
//     console.log(req.body);  
//     try {
//         // Make a SQL request on the column 'email' with the value in the variable 'emailAddr'
//         // const usersProfileData = await findProfileInformation({ id: profileId }) // create a inner join to get profile data for a user based off ID
//         // // Json the object we get back.
//         // res.json({ usersProfileData })
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// })
module.exports = router
