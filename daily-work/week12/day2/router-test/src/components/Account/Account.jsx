import React from "react";
import { useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  return (
    <div>
      <p>Account</p>
      <h2> I am currently reading this book: {location?.state?.name} </h2>
    </div>
  );
};

export default Account;
