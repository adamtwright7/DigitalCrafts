import React from "react";
import { useParams } from "react-router-dom";

const AccountUser = () => {
  const { id } = useParams();
  return (
    <div>
      AccountUser
      <h1> This is the account for user: {id} </h1>
    </div>
  );
};

export default AccountUser;
