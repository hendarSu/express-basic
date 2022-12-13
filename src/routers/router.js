const express = require("express");
const checkMethod = require("../middlewares/check-method");
const validate_user = require("../middlewares/validate-user");
const router = express.Router();

router.get("/", [checkMethod], (request, response) => {
    const { name } = request.query;
    response.render("home", {
        name : name, 
        user : {
            username : "Hendar",
            year_of_birthdate : "1995"
        }, 
        kehadiran : [
            {
                pertemuan : "Pertemuan 1",
                status : 1
            },
            {
                pertemuan : "Pertemuan 2",
                status : 2
            },
            {
                pertemuan : "Pertemuan 3",
                status : 0
            }
        ]
    });
});

router.get("/json", (request, response) => {
    const data = {
        "name": "Hendar",
        "age": "21"
    }
    response.status(200).json(data);
});

router.post("/user", [validate_user], (req, res) => {
    res.status(200).json(req.body)
})

router.get("/errorkan", (request, response) => {
    errorkan();
});


module.exports = router;