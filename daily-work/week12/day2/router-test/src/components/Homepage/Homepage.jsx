import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ user }) => {
  const bookInfo = { name: "Art of War" };
  return (
    <div>
      Homepage for {user}
      <Link to="/account" state={bookInfo}>
        Go to book info account
      </Link>
    </div>
  );
};

export default Homepage;
