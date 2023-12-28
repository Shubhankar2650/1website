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
       res.status(201).json({msg: "Registration Succesfull",
                        Token: await userCreated.generateToken(),
                        userID: userCreated._id.toString()}); 
    } catch (error) {
        // console.log(error);
        // res.status(500).json({msg:"Page not found"});
        const  status = 500;
        const message = "page not found";
        const err ={
            status,
            message,
        }

        next(err);
    }
};

// login page

const login = async (req,res)=>{
    try {
        const {email, password} = req.body;

        const alreadyExist = await User.findOne({email});
        // console.log(alreadyExist);
        if(!alreadyExist){
            return res.satus(401).json({msg: "Invalid Credentials"});
        }

        // const validPassword = await bcrypt.compare(password,alreadyExist.password);
        const validPassword = await alreadyExist.validatePassword(password);

        if(validPassword){
            res.status(201).json({
                msg: "WElcome",
                Token: await alreadyExist.generateToken(),
                userID: alreadyExist._id.toString(),
            }); 
        }else{
            return res.status(401).json({msg: "Invalid Credentials"});
        }

    } catch (error) {   
        // console.log(error);
        // res.status(500).json({msg: "Internal server error"});
        next(error);
    }
}



module.exports = {home,register,login,contact};