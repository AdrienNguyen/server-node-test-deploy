const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to node server with google cloud</h1>")
})

app.listen(5000, () => {
    console.log("server is runnning at port 5000")
})
