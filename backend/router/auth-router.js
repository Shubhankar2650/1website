const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller")

// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to my site, Now my projects begins");
// })

// we can use using the route method too
// the profit of the route method is that we use multiple http method with it. like get then post in the same route

router.route("/").get(authcontroller.home)


router.route("/register").post(authcontroller.register)

module.exports = router;
