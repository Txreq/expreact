const express = require("express")
const http = require("http")
const dotenv = require("dotenv").config()

const app = express()

app.get("/api", (req, res) => {
    res.json({ message: "Hello World 🌍" })
})


http.createServer(app).listen(process.env.PORT, () => {
    console.log("✅ Server is on")
})