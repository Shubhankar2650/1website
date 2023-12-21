const express = require("express");
const app = express();
const router = require("./router/auth-router")

// adding middleware for parsing json data from request
app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`The server is running at the port: ${PORT}`);
})