const { createResponse } = require("../models/response");
const authService = require("../services/authService");

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        try {
            const data = await authService.login(username, password);
            res.status(200).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
    signup: async (req, res) => {
        const { name, username, password } = req.body;
        try {
            const data = await authService.signup(name, username, password);
            res.status(201).json(createResponse("success", null, data));
        } catch (error) {
            res.status(500).json(createResponse("error", error.message));
        }
    },
};

module.exports = authController;
