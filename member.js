const { request } = require("express")
const express = require("express")
const models = require("../models/index")
const member = models.member
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async(req, res) => {
    let dataMember = await member.findAll()
    res.json(dataMember)
})

app.post("/", async(req,res)=>{
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        telpon:req.body.telp
    }

    member.create(data)
    .then(result => {
        res.json({message: "data has been inserted"})
    })
    .catch(error => {
        res.json({message:error.message})
    })
})

app.put("/", async(req,res)=>{
    let param = await {id:req.body.id}
    let data = await {
        id: req.body.id,
        nama: req.body.nama,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        telpon: req.body.telpon
    }

    member.update(data, {where:param})
    .then(result => {
        res.json({message: "data has been updated"})
    })
    .catch(error =>{
        res.json({message: error.message})
    })
})

app.delete("/:id", async(req,res)=>{
    let param = {id:req.params.id}
    member.destroy({where:param})
    .then(result=>{
        res.json({message: "data has been destroyed"})
    })
    .catch(error=>{
        res.json({message: error.message})
    })
})

module.exports = app