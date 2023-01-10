const { response } = require("express");
const express = require("express"); // Assigns the "express" dependency to a variable
const app = express() // "express" returns a function, (express.js in router in lib in node_modules)
const PORT = 3003 // Assigns a port. Can be between 3000-3099. 
const fs = require("fs") // Allows read/write functionality. Part of express. 
const users = []

app.use(express.json()) // allows your request to have a body. 

// Create a user -- from the body 
app.post("/createUser", (req,res)=>{
    users.push(req.body)
    console.log(users)
    res.send(`Created user ${req.body.name} with ID ${req.body.id}.`)
})

// Read users 
app.get("/readUsers", (req,res)=>{
    res.send(users)
})

// Update user id -- body is the user input.
app.put("/updateUser/:userID", (req,res)=>{
    userIndex = users.findIndex(user => user.id == req.params.userID)
    users.splice(userIndex,1,{"name":req.body.name, "id":req.body.id})
    res.send(`Updated name for userID ${req.body.id} to ${req.body.name}.`)
})

// delete a single user -- from the url 
app.delete("/delete/:userID", (req,res)=>{
    users = users.filter(user => user.id !== req.params.userID)
    res.send(`Deleted user. Users are now ${users}.`)
})

// delete all users 
app.delete("/deleteAll", (req,res)=>{
    users.length = 0 
    res.send(`All users deleted. Data is now ${users}.`)
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))

