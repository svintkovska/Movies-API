import React from "react";

function Button({text, myhref}){

    return(
        <>
        <a href={myhref}>
        <button className="my-btn" > {text}</button>
        </a>
        </>
    );

}


export default Button;