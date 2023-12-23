const User = require("../models/user-model")
// home page

const home = async (req,res) =>{
    try {
        res.status(200).send("Welcome to the home page");
    } catch (error) {
        console.log(error);
    }
};

// register page

const register = async(req,res) =>{
    try {
       console.log(req.body);
       const {username,email, phone, password} = req.body;

       const alreadyExist = await User.findOne({email});
       if(alreadyExist){
            return res.status(400).json({msg:"email already exists"});
       }

       const userCreated = await User.create({username,email,phone,password});
       res.status(200).json({msg: userCreated}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Page not found"});
    }
};

module.exports = {home,register};