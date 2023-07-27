const express = require("express");
const recordRouter = express.Router();
const recordController = require("../controllers/recordController");

recordRouter.get("/:userId/:date", recordController.getByUserIdAndDate);
recordRouter.get("/:userId", recordController.getByUserId);
recordRouter.post("/", recordController.addRecord);
recordRouter.delete("/:id", recordController.deleteRecord);

module.exports = recordRouter;
