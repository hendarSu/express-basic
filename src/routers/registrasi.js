const express = require("express");
const registrasi = express.Router();
const users = [];

registrasi.get("/registrasi", (req, res) => {
    res.render("registrasi");
})

registrasi.post("/registrasi", (req, res) => {
    const { email, password } = req.body;
    users.push({
        email,
        password 
    });
    res.redirect("/users/list");
})

registrasi.get("/users/list", (req, res) => {
    res.status(200).json(users);
})

module.exports = registrasi;