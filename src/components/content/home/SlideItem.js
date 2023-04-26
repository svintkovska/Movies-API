import React from "react";
import Button from "../../../elements/Button";

function SlideItem({title, text, imgUrl, href}){

    return(
        <>
        <li class="slide">
              <div class="slide-content">
                <h2 class="slide-title">{title}</h2>
                <p class="slide-text">
                  {text}
                </p>
                <Button text="Learn more" myhref={href}/>
              </div>
              <p class="slide-image">
                <img
                  src={imgUrl}
                  alt="stuff"
                  width="320"
                  height="240"
                />
              </p>
            </li>
  
        </>
    );

}


export default SlideItem;