const express = require("express")
const cors = require("cors")
const http = require("http")

const app = express()
const port = 8080

app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/api", (req, res) => {
    res.json({
        message: "Hello World 🌍"
    })
})

http.createServer(app).listen(port, () => {
    console.log(`Server is online http://localhost:${port}`);
})