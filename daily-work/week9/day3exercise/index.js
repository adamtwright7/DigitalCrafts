const express = require("express");
const app = express() 
const {Clinics, Employees, Patients} = require("./models")
const {Op} = require("sequelize");
const { application } = require("express");
const PORT = 3010 

app.use(express.json())

/// Routes for Clinics 

// Find all entries 
app.get("/clinics", async (req,res) => {
    const clinics = await Clinics.findAll()
    res.send(clinics)
})

// Find one entry 
app.get("/getClinicById", async (req,res) => {
    const clinics = await Clinics.findAll({
        where: {
            id: req.body.id
        }
    })
    res.send(clinics)
})

// create an entry 
app.post("/addClinic", async (req,res) =>{
    const { clinicName, location, size } = req.body 
    const clinics = await Clinics.create({
        clinicName,
        location,
        size,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send(clinics)
})

// modify an entry 
app.put("/updateClinicById", async (req, res) => {
    const { clinicName, location, size } = req.body 
    const clinics = await Clinics.update({
        clinicName,
        location,
        size,
        updatedAt: new Date()
    },{where:{
        id: req.body.id
    }}
    )
    res.send(clinics)
})

// delete an entry 
app.delete("/deleteClinicById", async(req, res) => {
    const clinics = await Clinics.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send(`deleted clinic with ID ${req.body.id}`)
})

/// Routes for Employees 

// Find all entries 
app.get("/Employees", async (req,res) => {
    const employees = await Employees.findAll()
    res.send(employees)
})

// Find one entry 
app.get("/getEmployeeById", async (req,res) => {
    const employees = await Employees.findAll({
        where: {
            id: req.body.id
        }
    })
    res.send(employees)
})

// create an entry 
app.post("/addEmployee", async (req,res) =>{
    const { firstName, lastName, clinicId } = req.body 
    const employees = await Employees.create({
        firstName,
        lastName,
        clinicId,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send(employees)
})

// modify an entry 
app.put("/updateEmployeeById", async (req, res) => {
    const { firstName, lastName, clinicId } = req.body 
    const employees = await Employees.update({
        firstName,
        lastName,
        clinicId,
        updatedAt: new Date()
    },{where:{
        id: req.body.id
    }}
    )
    res.send(employees)
})

// delete an entry 
app.delete("/deleteEmployeeById", async(req, res) => {
    const employees = await Employees.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send(`deleted employee with ID ${req.body.id}`)
})

/// Routes for Patients 

// Find all entries 
app.get("/Patients", async (req,res) => {
    const patients = await Patients.findAll()
    res.send(patients)
})

// Find one entry 
app.get("/getPatientById", async (req,res) => {
    const patients = await Patients.findAll({
        where: {
            id: req.body.id
        }
    })
    res.send(patients)
})

// create an entry 
app.post("/addPatient", async (req,res) =>{
    const { firstName, lastName, employeeAssignedId } = req.body 
    const patients = await Patients.create({
        firstName,
        lastName,
        employeeAssignedId,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send(patients)
})

// modify an entry 
app.put("/updatePatientById", async (req, res) => {
    const { firstName, lastName, employeeAssignedId } = req.body 
    const patients = await Patients.update({
        firstName,
        lastName,
        employeeAssignedId,
        updatedAt: new Date()
    },{where:{
        id: req.body.id
    }}
    )
    res.send(patients)
})

// delete an entry 
app.delete("/deletePatientById", async(req, res) => {
    const patients = await Patients.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send(`deleted patient with ID ${req.body.id}`)
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))
