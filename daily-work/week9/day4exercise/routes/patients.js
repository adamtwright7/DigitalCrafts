const express = require("express");
const { Patients } = require("../models");
const router = express.Router();

router.use(express.json());

/// Routes for Patients

// Find all entries
router.get("/all", async (req, res) => {
  const patients = await Patients.findAll();
  res.send(patients);
});

// Find one entry
router.get("/getById", async (req, res) => {
  const patients = await Patients.findAll({
    where: {
      id: req.body.id,
    },
  });
  res.send(patients);
});

// create an entry
router.post("/addPatient", async (req, res) => {
  const { firstName, lastName, employeeAssignedId } = req.body;
  const patients = await Patients.create({
    firstName,
    lastName,
    employeeAssignedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(patients);
});

// modify an entry
router.put("/updatePatientById", async (req, res) => {
  const { firstName, lastName, employeeAssignedId } = req.body;
  const patients = await Patients.update(
    {
      firstName,
      lastName,
      employeeAssignedId,
      updatedAt: new Date(),
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send(patients);
});

// delete an entry
router.delete("/deletePatientById", async (req, res) => {
  const patients = await Patients.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`deleted patient with ID ${req.body.id}`);
});

module.exports = router;
