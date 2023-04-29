import React from "react";
import Logo from "./Logo";
import Copyright from "./Copyright";
import Icons from "./Icons";
import {Link} from "react-router-dom";

function Footer(){

    return (
      <>
        <footer id="footer">
          <div className="container">
            <div className="row justify-content-between">
              <div style={{ marginTop: "50px" }}>
                <Logo />
              </div>
              <div className="links">
              <Link to='/movies/Action'>Action</Link>
              <Link to='/movies/Comedy'>Comedy</Link>
              <Link to='/movies/Drama'>Drama</Link>
              <Link to='/movies/Horror'>Horror</Link>
              <Link to='/movies/Crime'>Crime</Link>
              <Link to='/movies/War'>War</Link>
              </div>
              <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/aboutus'>About Us</Link>
                <Link to='/contactus'>Contact</Link>
                <Link to='/testimonials'>Testimonials</Link>  
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