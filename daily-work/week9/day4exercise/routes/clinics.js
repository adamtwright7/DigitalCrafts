const express = require("express");
const { Clinics } = require("../models");
const router = express.Router();

router.use(express.json());

/// Routes for Clinics

// Find all entries
router.get("/all", async (req, res) => {
  const clinics = await Clinics.findAll();
  res.send(clinics);
});

// Find one entry
router.get("/ById", async (req, res) => {
  const clinics = await Clinics.findAll({
    where: {
      id: req.body.id,
    },
  });
  res.send(clinics);
});

// create an entry
router.post("/addClinic", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const clinics = await Clinics.create({
    clinicName,
    location,
    size,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(clinics);
});

// modify an entry
router.put("/updateClinicById", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const clinics = await Clinics.update(
    {
      clinicName,
      location,
      size,
      updatedAt: new Date(),
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send(clinics);
});

// delete an entry
router.delete("/deleteClinicById", async (req, res) => {
  const clinics = await Clinics.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`deleted clinic with ID ${req.body.id}`);
});

module.exports = router;
