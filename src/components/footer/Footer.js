import React from "react";
import Logo from "./Logo";
import Copyright from "./Copyright";
import Icons from "./Icons";

function Footer(){

    return (
      <>
        <footer id="footer">
          <div class="container">
            <div class="row justify-content-between">
              <div style={{ marginTop: "50px" }}>
                <Logo />
              </div>
              <div className="links">
                <a href="/">Action</a>
                <a href="/">Comedy</a>
                <a href="/">Drama</a>
                <a href="/">Horror</a>
                <a href="/">Crime</a>
                <a href="/">Western</a>
              </div>
              <div className="links">
                <a href="/">Home</a>
                <a href="/movies">Movies</a>
                <a href="/aboutus">About Us</a>
                <a href="/contactus">Contact</a>
                <a href="/testimonials">Testimonials</a>
              </div>

              <Icons/>
            </div>
          </div>
          <hr></hr>
          <Copyright/>
        </footer>
      </>
    );

}

export default Footer;