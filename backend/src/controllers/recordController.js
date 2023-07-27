const { createResponse } = require("../models/response");
const recordService = require("../services/recordService");

const recordController = {
    getByUserIdAndDate: async (req, res) => {
        const { date, userId } = req.params;
        try {
            const data = await recordService.getByUserIdAndDate(userId, date);
            res.status(200).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
    getByUserId: async (req, res) => {
        const { userId } = req.params;
        try {
            const data = await recordService.getByUserId(userId);
            res.status(200).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
    addRecord: async (req, res) => {
        const { date, userId, value } = req.body;
        try {
            const data = await recordService.addRecord(userId, value, date);
            res.status(201).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
    deleteRecord: async (req, res) => {
        const { id } = req.params;
        try {
            const data = await recordService.deleteRecord(id);
            res.status(200).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
};

module.exports = recordController;
