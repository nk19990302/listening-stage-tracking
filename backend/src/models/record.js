const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
});

const Record = mongoose.model("Record", RecordSchema);
module.exports = { Record };
