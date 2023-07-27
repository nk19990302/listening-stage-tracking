const express = require("express");
const recordRouter = require("./recordRoute");
const authRouter = require("./authRoutes");
const mainRouter = express.Router();

mainRouter.use("/record", recordRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
