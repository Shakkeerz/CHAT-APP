import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "gray",
        justifyContent: "space-between",
        padding: "0px 50px",
      }}
    >
      <h3>logo</h3>

      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to='/Shop'>shop</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Nav;
