/**
 * This is function middleware for error handling
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandlingInternalServerError = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: "fail",
        error : err.message
    })
}

module.exports = errorHandlingInternalServerError;