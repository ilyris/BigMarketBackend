const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config.js")

function generateToken(user) {
    const payload = {
        emailAddr: user.email, 
        username: user.username
    }
    const options = {
        expiresIn: "24h"
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {
    generateToken
}