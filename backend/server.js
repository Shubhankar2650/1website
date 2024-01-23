require("dotenv").config(); // middleware for using the dotenv file. Without it dotenv file is not used

const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// lets tackle cors

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST,PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

// adding middleware for parsing json data from request
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form",contactRouter);

// always use errorMidddleware before connection to the database
app.use(errorMiddleware);



const PORT = 5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`The server is running at the port: ${PORT}`);
    })
})
