/**
 * function error handler 404
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        status: "fail",
        error : "Not Found"
    });
}

module.exports = notFoundHandler;