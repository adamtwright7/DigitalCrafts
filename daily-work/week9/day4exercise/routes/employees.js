const express = require("express");
const { Employees } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const { resolveInclude } = require("ejs");

router.use(express.json());

/// Routes for Employees

// Find all entries
router.get("/all", async (req, res) => {
  const employees = await Employees.findAll();
  res.send(employees);
});

// Find one entry
router.get("/ById", async (req, res) => {
  const employees = await Employees.findAll({
    where: {
      id: req.body.id,
    },
  });
  res.send(employees);
});

// create account page ????????????????????????????????????????????????????????
router.get("/createAccount", async (req, res) => {
  res.render("pages/createAccount");
});

// log in page
router.get("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Employees.findOne({
    where: { username },
  });
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      res.render("pages/landing", { user: user });
      return;
    } else {
      res.status(403).send("not valid user");
    }
  });
});

// create an entry
router.post("/add", (req, res) => {
  const { firstName, lastName, clinicId, password } = req.body;
  // hash the password
  bcrypt.hash(password, 10, async (err, hash) => {
    const employees = await Employees.create({
      firstName,
      lastName,
      clinicId,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(employees);
    res.status(200).render("pages/login");
  });
});

// modify an entry
router.put("/updateById", async (req, res) => {
  const { firstName, lastName, clinicId, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    const employees = await Employees.update(
      {
        firstName,
        lastName,
        clinicId,
        password: hash,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.send(employees);
  });
});

// delete an entry
router.delete("/deleteById", async (req, res) => {
  const employees = await Employees.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`deleted employee with ID ${req.body.id}`);
});

module.exports = router;
