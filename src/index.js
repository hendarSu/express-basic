const express = require("express");
const morgan = require("morgan");
const router = require("./routers/router");
const registrasi = require("./routers/registrasi");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static('./src/assets'));

// Middleware third-party
app.use(morgan("short"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Section Registration router
app.use(router);
app.use(registrasi);

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