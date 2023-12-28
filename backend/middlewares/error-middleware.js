const errorMiddleware = (err,req,res,next) =>{
    const status = err.status || 500;
    const message = err.message || "Server Error";
    const messageDetails = err.messageDetails || "backend is not working properly";
    return res.status(status).json({message,messageDetails});
}

module.exports = errorMiddleware;