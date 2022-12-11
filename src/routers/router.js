const express = require("express");
const checkMethod = require("../middlewares/check-method");
const router = express.Router();

// /**
//  * Router level middleware
//  * @param {*} req 
//  * @param {*} res 
//  * @param {*} next 
//  */
// const timelog = (req, res, next) => {
//     const date = new Date();
//     console.log("Time : "+ date);
//     next();
// }
// router.use(timelog);

router.get("/", 
    [
        checkMethod
    ], 
    (request, response) => {
        response.status(200).send("Hello ExpressJS!");
    });

router.get("/json", (request, response) => {
    const data = {
        "name": "Hendar",
        "age": "21"
    }
    response.status(200).json(data);
});

router.get("/errorkan", (request, response) => {
    errorkan();
});


module.exports = router;