import React from "react";
import {Link} from "react-router-dom";

function Menu(){

    return (
      <>
        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/movies">
            Movies
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/aboutus">
            About
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/contactus">
            Contact
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/testimonials">
            Testimonials
          </Link>
        </li>
      </>
    );

}

export default Menu;