import React from "react";

function Banner({imgUrl, title, textcolor}){

    return (
      <>
        <header id="header" style={{ background: `url(${imgUrl})`, color: textcolor }}>
          <h1>{title}</h1>
        </header>
      </>
    );

}


export default Banner;