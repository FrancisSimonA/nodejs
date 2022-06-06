const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://admin:admin@test-app-db.qnqdk.mongodb.net/?retryWrites=true&w=majority";

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const conneck = mongoose.connection

conneck.on("open", () => {
    console.log("connected..")
})

app.use(express.json())

const employeeRouter = require("./routers/employeeRoute")
app.use("/employee", employeeRouter)

app.listen(3000, () => {
    console.log("Server started")
})
