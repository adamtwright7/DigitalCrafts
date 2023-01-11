const express = require("express")
const app = express()
const PORT = 3006
const data = require("./data") // importing from the data.js file

// middleware 
app.use(express.static(__dirname + "/public"))
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    res.render("pages/index", {
        data: data,
        accountBalance: accountBalance,
        pending: pending,
        processedData: processedData,
    })
})

app.listen(PORT, console.log(`Listening on port ${PORT}.`))

const accountBalance = {
    amount: "$123,233,322,000.09",
};
const pending = {
    amount: "$46,788.21",
};
  const processedData = {
    amount: "$657,441.22",
};