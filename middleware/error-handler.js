const {customAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof customAPIError){
        return  res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({message: "Something Went Wrong, Please Try again later"})
} 

module.exports = errorHandlerMiddleware;