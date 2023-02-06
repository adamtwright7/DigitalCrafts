import React from "react";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeContainer = ({ employees, removeEmployee }) => {
  return (
    <div className="employeeContainer">
      {employees.map((employee) => (
        <EmployeeCard employee={employee} removeEmployee={removeEmployee} />
      ))}
    </div>
  );
};
