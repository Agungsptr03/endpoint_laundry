const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())


const member = require("./router/member")
const paket = require("./router/paket")
const outlet = require("./router/outlet")

app.use("/member", member)
app.use("/paket", paket)
app.use("/outlet", outlet)


app.use(express.static(__dirname))

app.listen(8000, () => {
    console.log("success")
})