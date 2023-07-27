const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);

module.exports = authRouter;
