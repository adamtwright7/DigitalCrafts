// "app.js" is the default name for a backend application. It's like "index.html"

const express = require("express"); // Assigns the "express" dependency to a variable
const app = express() // "express" returns a function, (express.js in router in lib in node_modules)
const PORT = 3000 // Assigns a port. Can be between 3000-3099. 

app.get("/",(req,res)=>{
    res.send("howdy") // sends the data inside the parenthesis to any requests.
})

app.get("/error",(req,res)=>{
    res.status(400).send("error")
})

// CRUD routes

const data = [
    {
        username: "user1",
        password: "pass1",
    },
    {
        username: "user2",
        password: "pass2",
    }
]

// Create 

app.post("/create",(req,res)=>{
    
})

// Read 

app.get("/read",(req,res) => {
    res.send(data)
})

// Update



// Destroy 


app.listen(PORT, console.log(`Listening on port ${PORT}`))

