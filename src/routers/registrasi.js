const express = require("express");
const registrasi = express.Router();
const users = [];

registrasi.get("/", (req, res) => {
    res.render("registrasi");
})

registrasi.post("/", (req, res) => {
    const { email, password } = req.body;
    users.push({
        email,
        password 
    });
    res.redirect("/users/list");
})

module.exports = registrasi;