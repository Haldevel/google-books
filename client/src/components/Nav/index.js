import React from "react";
import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" >

      <h2>Google Books </h2>
      <span> | </span>
      <Link to="/search"> Search</Link>
      <span> | </span>
      <Link to="/saved"> Saved </Link>
    </nav>
  );
}

export default Nav;