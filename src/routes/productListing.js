const { Router } = require("express");
const router = Router();


router.post("/", async (req, res, next) => {
    // const { profileId } = req.body
    console.log(req.body);
    try {
        // Make a SQL request on the column 'email' with the value in the variable 'emailAddr'
        // const usersProfileData = await findProfileInformation({ id: profileId }) // create a inner join to get profile data for a user based off ID
        // // Json the object we get back.
        // res.json({ usersProfileData })
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.get("/", async (req, res, next) => {
    // const { profileId } = req.body
    console.log(req.body);
    try {
        // Make a SQL request on the column 'email' with the value in the variable 'emailAddr'
        // const usersProfileData = await findProfileInformation({ id: profileId }) // create a inner join to get profile data for a user based off ID
        // // Json the object we get back.
        // res.json({ usersProfileData })
    } catch (error) {
        console.log(error)
        next(error)
    }
})
module.exports = router
