import { useState } from "react";
import "./App.css";
import { EmployeeContainer } from "../components/EmployeeContainer";
import { employeeData } from "../public/employeeData";
// I should maybe just import this in employee container???

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const removeEmployee = (employeeId) => {
    // make the new employees list all the employees except the one clicked.
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };

  return (
    <div className="App">
      <h2> Check out these cool employees: </h2>
      <EmployeeContainer
        employees={employees}
        removeEmployee={removeEmployee}
      />
    </div>
  );
}

export default App;
