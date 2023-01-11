const express = require("express")
const app = express()
const PORT = 3005

// middleware 
app.use(express.static(__dirname + "/public"))
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    const mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ]
    res.render("pages/index", {
        mascots: mascots
    })
})

app.get("/about",(req,res)=>{
    res.render("pages/about")
})

app.get("/about_me",(req,res)=>{
    const me = {
        name: "adamTwright",
        city: "Knoxville",
        occupation: "Software Engineer (lord willin prayer hand emoji)",
        pic: "/assets/pic.png"
    }
    res.render("pages/about_me", {me: me})
})

app.listen(PORT, console.log(`Listening on port ${PORT}.`))