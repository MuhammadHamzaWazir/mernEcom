const express = require("express");
const app = express();

const errorMiddliware = require("./middleware/error");


app.use(express.json());
// Routes Import
const product = require("./routes/productRoute");

app.use("/api/v1",product);

// middleware for error 
app.use(errorMiddliware);

module.exports = app