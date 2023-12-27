import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between ml-12 p-2">
      <Link to="/">
        <div>Estatify</div>
      </Link>
      <ul className="flex gap-x-12 mr-12">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
