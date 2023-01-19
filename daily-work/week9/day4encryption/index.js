const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const { Users } = require("./models");
const { Op } = require("sequelize");
const { application } = require("express");
const PORT = 3011;

app.use(express.json());

// Create a new user with a hash password
app.post("/createUser", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    // The number is the rounds of "salt" or encryption
    // add the user and password to the database
    const user = await Users.create({
      username,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(user);
  });
});

// Check a password
app.post("/loginUser", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({
    where: {
      username: username,
    },
  });
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!result) {
      // result will be true if the passwords match
      res.status(401).send("Incorrect password. Try again.");
      return;
    }
    res.status(200).send("Matching password.");
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
