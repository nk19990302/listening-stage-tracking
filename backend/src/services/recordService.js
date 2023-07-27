const { Record } = require("../models/record");

const recordService = {
    getByUserId: async (userId) => {
        try {
            return await Record.find({
                userId: userId,
            });
        } catch (error) {
            console.log("get record by userId", error);
            throw error;
        }
    },
    getByUserIdAndDate: async (userId, date) => {
        try {
            const dbResponse = await Record.find({
                userId: userId,
                date: date,
            });
            return dbResponse[0];
        } catch (error) {
            console.log("get record by userId and date", error);
            throw error;
        }
    },
    addRecord: async (userId, value, date) => {
        try {
            const record = new Record({
                userId,
                value,
                date,
                createdAt: new Date().getTime(),
            });
            return await record.save();
        } catch (error) {
            console.log("add record", error);
            throw error;
        }
    },
    deleteRecord: async (id) => {
        try {
            await Record.deleteOne({ _id: id });
        } catch (error) {
            console.log("delete record", error);
            throw error;
        }
    },
};

module.exports = recordService;
