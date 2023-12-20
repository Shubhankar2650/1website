const express = require("express");
const router = express.Router();

// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to my site, Now my projects begins");
// })

// we can use using the route method too
// the profit of the route method is that we use multiple http method with it. like get then post in the same route

router.route("/").get((req,res)=>{
    res.status(200).send("Welcome to my site");
})


router.route("/register").get((req,res)=>{
    res.status(200).send("This is the registration page");
})

module.exports = router;
