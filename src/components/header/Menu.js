import React from "react";


function Menu(){

    return (
      <>
        <li>
          <a class="menu-item" href="/">
            Home
          </a>
        </li>
        <li>
          <a class="menu-item" href="/movies">
            Movies
          </a>
        </li>
        <li>
          <a class="menu-item" href="/aboutus">
            About
          </a>
        </li>
        <li>
          <a class="menu-item" href="contactus">
            Contact
          </a>
        </li>
        <li>
          <a class="menu-item" href="/testimonials">
            Testimonials
          </a>
        </li>
      </>
    );

}

export default Menu;