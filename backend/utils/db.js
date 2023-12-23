const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("database is connected");
    } catch (error) {
        console.error("Connnection is not sussecfull");
        process.exit(0);
    }
};

module.exports = connectDB;