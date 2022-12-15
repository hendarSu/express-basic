const express = require("express");
const user = express.Router();
const fs = require('fs');

user.get("/", (req, res) => {
    fs.readFile("./src/database/user.json","utf8", (err, data) => {
        if (err) {
          res.status(500).json({
            status: err.code,
            message : err.message
          });
        }
        res.status(200).json(JSON.parse(data));
      });
})

user.get("/list", (req, res) => {
    res.status(200).json(user);
})

module.exports = user;