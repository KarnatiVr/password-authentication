const ErrorHandler= (err,req,res,next)=>{
    console.log(err.message)
    const status = err.status || 400;
    res.status(status).send(err.message)
}

module.exports= ErrorHandler