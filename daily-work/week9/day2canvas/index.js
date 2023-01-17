require('dotenv').config()

const express = require("express")
const app = express()
const creds = require("./creds")
const PORT = 3008

app.use(express.static(__dirname + "/css"))
app.set("view engine","ejs")

app.use(express.json()) // gives access to req.body

app.get("/",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `SELECT * FROM canvastodolist`,
            (err,result) => {
                release() // release the connection once a query was run
                if(err){
                    res.status(400).send(err.stack)
                } else {
                    res.render("pages/index",{result: result})
                }
            }
        )
    })
})

app.post("/todo_add",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `INSERT INTO canvastodolist (task, is_completed, notes) VALUES ($1, $2, $3);`,
            [req.body.task, req.body.is_completed, req.body.note],
            (err,result) => {
                release() // release the connection once a query was run
                if(err){
                    res.status(400).send(err.stack)
                } else {
                    res.status(200).send(result)
                }
            }
        )
    })
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))