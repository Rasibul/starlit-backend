const express = require("express");
const { loginUser } = require("./login.controller");
const router = express.Router();


// Route for registering a new user
router.post("/login", loginUser);

module.exports = router;