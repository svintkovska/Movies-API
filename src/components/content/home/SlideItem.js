import React from "react";
import Button from "../../../elements/Button";

function SlideItem({title, text, imgUrl, href}){

    return (
      <>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">{title}</h2>
            <p className="slide-text">{text}</p>
            <Button text="Learn more" myhref={href} />
          </div>
          <p className="slide-image">
            <img src={imgUrl} alt="stuff" width="320" height="240" />
          </p>
        </li>
      </>
    );

}


export default SlideItem;