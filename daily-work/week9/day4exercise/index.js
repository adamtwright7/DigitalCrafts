const express = require("express");
const app = express();
const PORT = 3010;

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.use(express.json());

// import and use the clinic routes
const clinics = require("./routes/clinics");
app.use("/clinics", clinics);

// import and use the employees routes
const employees = require("./routes/employees");
app.use("/employees", employees);

// import and use the patients routes
const patients = require("./routes/patients");
app.use("/patients", patients);

// listen
app.listen(PORT, console.log(`Listening on port ${PORT}`));
