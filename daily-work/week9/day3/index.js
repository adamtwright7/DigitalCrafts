const express = require("express");
const app = express() 
const {Owners, Pets} = require("./models")
const {Op} = require("sequelize")
const PORT = 3009 

app.use(express.json())

app.get("/pets", async (req,res) => {
    const pets = await Pets.findAll()
    res.send(pets)
})

app.get("/owners", async (req,res) => {
    const owners = await Owners.findAll()
    res.send(owners)
})

app.get("/ownerByName", async (req,res) => {
    const owners = await Owners.findAll({
        where: {
            firstName: "Adam"
        }
    })
    res.send(owners)
})

app.get("/pet", async (req,res) => {
    const pets = await Pets.findOne({})
    res.send(pets)
})

app.get("/petById", async (req,res) => {
    const pets = await Pets.findAll({
        where: {
            id: {
                [Op.gte]: 2,
                [Op.lte]: 4
            }
        }
    })
    res.send(pets)
})

app.post("/addPet", async (req,res) =>{
    const { name, type, age } = req.body 
    const pets = await Pets.create({
        name,
        type,
        age,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send(pets)
})



app.listen(PORT, console.log(`Listening on port ${PORT}`))
