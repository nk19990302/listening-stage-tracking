const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { corsOptions } = require("./cors.config");
const mainRouter = require("./src/routes");

const app = express();

const mongoUrl = "mongodb://0.0.0.0:27017/colabx";
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", mainRouter);

(async () => {
    try {
        await mongoose.connect(mongoUrl);
        app.listen(PORT, () => {
            console.log("⚡ listening on port " + PORT);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();
