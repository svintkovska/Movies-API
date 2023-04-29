import React from "react";

function ClientItem({ imgUrl, text, onClickAct }) {
    const handlerClick = () => {
        onClickAct(text);
      }
  return (
    <>
      <img className="client-img" src={imgUrl} onClick={handlerClick}/>
    </>
  );
}


export default ClientItem;