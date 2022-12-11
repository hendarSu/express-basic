const express = require("express");
const morgan = require("morgan");
const router = require("./routers/router");
const app = express();

// Middleware third-party
app.use(morgan("short"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

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
app.use(errorHandlingInternalServerError);

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
app.use(notFoundHandler);

app.listen(8000, () => {
    console.log("Server run on port 8000");
});