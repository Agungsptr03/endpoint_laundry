const {
    request
} = require("express")
const express = require("express")
const models = require("../models/index")
const paket = models.paket
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("/", async (req, res) => {
    let dataPaket = await paket.findAll()
    res.json(dataPaket)
})

module.exports = app