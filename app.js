const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/AlienDBex";

const app = express();

// Remove `useNewUrlParser` as it's no longer needed
mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
    console.log("connected.....");
});

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log("Server started");
});
