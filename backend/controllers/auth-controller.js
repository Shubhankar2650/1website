const User = require("../models/user-model")
const bycrypt = require("bcrypt")

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
       res.status(201).json({msg: "Registration Succesfull",
                        Token: await userCreated.generateToken(),
                        userID: userCreated._id.toString()}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Page not found"});
    }
};

// login page

const login = async (req,res)=>{
    try {
        const {email, password} = req.body;

        const alreadyExist = await User.findOne({email});
        console.log(alreadyExist);
        if(!alreadyExist){
            return res.satus(401).json({msg: "Invalid Credentials"});
        }

        const validPassword = await bycrypt.compare(password,alreadyExist.password);

        if(validPassword){
            res.status(201).json({
                msg: "WElcome",
                Token: await userExist.generateToken(),
                userID: userExist._id.toString(),
            }); 
        }else{
            return res.status(401).json({msg: "Invalid Credentials"});
        }zz

    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
    }
}

module.exports = {home,register,login};