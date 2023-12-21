
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
       res.status(200).send("You arre now on the register page"); 
    } catch (error) {
        res.status(400).send({msg:"Page not found"});
    }
};

module.exports = {home,register};