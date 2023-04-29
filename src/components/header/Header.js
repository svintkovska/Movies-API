import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

function Header(){

    return (
      <>
        <div className="main-nav">
          <div className="container">      
            <nav>
              <ul>
                <Logo />
                <Menu />
                <Search />
              </ul>
            </nav>
          </div>
        </div>
      </>
    );

}

export default Header;