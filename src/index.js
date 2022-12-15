const express = require("express");
const morgan = require("morgan");
const router = require("./routers/router");
const registrasi = require("./routers/registrasi");
const notFoundHandler = require("./middlewares/not-found");
const errorHandlingInternalServerError = require("./middlewares/error-handler");
const user = require("./routers/user");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Set Public Static folder
app.use(express.static('./src/assets'));

// Middleware third-party
app.use(morgan("short"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Initial router
app.use(router);
app.use('/registrations', registrasi);
app.use('/users', user);

// Middlerware
app.use(errorHandlingInternalServerError);
app.use(notFoundHandler);

app.listen(8000, () => {
    console.log("Server run on port 8000");
});