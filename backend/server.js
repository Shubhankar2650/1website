require("dotenv").config(); // middleware for using the dotenv file. Without it dotenv file is not used

const express = require("express");
const app = express();
const router = require("./router/auth-router")
const connectDB = require("./utils/db")
// adding middleware for parsing json data from request
app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`The server is running at the port: ${PORT}`);
    })
})
