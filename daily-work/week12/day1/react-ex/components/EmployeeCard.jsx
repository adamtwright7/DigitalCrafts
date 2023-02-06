import React from "react";

export const EmployeeCard = ({ employee, removeEmployee }) => {
  return (
    <div className="employeeCard">
      <button onClick={() => removeEmployee(employee.id)}>
        Remove Employee
      </button>
      <p>
        {employee.first_name} {employee.last_name}
      </p>
      <p>
        Hack this employee at {employee.ip_address} or visit them at{" "}
        {employee.sector}
      </p>
      <p>
        Is this employee currently active?{" "}
        {employee.currently_active ? "✅" : "❌"}
      </p>
      <img src={employee.profile_picture} alt="" />
      <p> Contact at {employee.email} </p>
      <hr />
    </div>
  );
};
