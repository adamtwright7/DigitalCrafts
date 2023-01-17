require('dotenv').config()

const express = require("express")
const app = express()
const creds = require("./creds")
const PORT = 3007

app.use(express.json()) // gives access to req.body

app.get("/todo_list",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `SELECT * FROM grocerylist`,
            (err,result) => {
                release() // release the connection once a query was run
                if(err){
                    res.status(400).send(err.stack)
                } else {
                    res.status(200).send(result.rows)
                }
            }
        )
    })
})

app.post("/create_todo",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `INSERT INTO grocerylist (task) VALUES ($1);`,
            [req.body.task],
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

// create multiple tasks at once 
app.post("/create_todos", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
      if (err) {
        return console.error(err.stack);
      }
      req.body.forEach((task) => {
        client.query(
          `INSERT INTO grocerylist (task) VALUES ($1);`,
          [task.task],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`inserted ${result.rowCount} row.`);
            }
          }
        );
      });
      res.send("inserted rows");
    });
  });

  
app.put("/modify_todo",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `UPDATE grocerylist SET task = $1 WHERE id=$2;`,
            [req.body.task, req.body.id],
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

app.delete("/del_todo",(req,res)=>{
    creds.connect((err,client,release)=>{
        // check for error 
        if(err){
            return console.error(err.stack)
        }
        client.query(
            `DELETE FROM grocerylist WHERE id=($1);`,
            [req.body.id],
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