const express = require("express"); // Assigns the "express" dependency to a variable
const app = express() // "express" returns a function, (express.js in router in lib in node_modules)
const PORT = 3002 // Assigns a port. Can be between 3000-3099. 

const cowsay = require("cowsay");

app.use(express.json())

app.post("/speak",(req, res)=>{
    res.send(
        cowsay.say({text: req.body.message})
    )
})

app.get("/think",(req, res)=>{
    res.send(
        cowsay.think({text: "I'm a cow"})
    )
})

app.post("/yell",(req,res)=>{
    res.send(
        cowsay.think({
            text: req.body.message.toUpperCase()
        })
    )
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))

// make a route that makes the cow say and think something. 