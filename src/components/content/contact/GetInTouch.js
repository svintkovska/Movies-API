import React from "react";
import Icons from "../../footer/Icons"
import CallBtn from "./CallBtn";
function GetInTouch(){

    return (
      <>
        <div className="get-in-touch">
          <CallBtn />
          <div className="connect-details">
            <h2>Let's Connect</h2>
            <Icons />
            <h2>Contact Details</h2>

            <div className="row-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/458/458363.png?w=740&t=st=1682444546~exp=1682445146~hmac=5519f5b9efb3db1c220866d93d07108286e637854212e4b49d4424fc89423e21"
              />
              <p>7101 SW 24th St Miami, FL 33155</p>
            </div>
            <div className="row-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/311/311314.png?w=740&t=st=1682444608~exp=1682445208~hmac=d21a48fc84e5586ba98f3c1d20a603910eb84b65c6d3cb2b822ba2fc9fdef454"
              />
              <p>048 600 467 415</p>
            </div>
            <div className="row-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/718/718343.png?w=740&t=st=1682444655~exp=1682445255~hmac=f005434e8e4a03a7487db94a358c47a0465d4d323be30536aa34f1d3b868df97"
              />
              <p>justwatch@gmail.com</p>
            </div>
          </div>
        </div>
      </>
    );

}


export default GetInTouch;