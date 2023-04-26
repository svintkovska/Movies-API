import React, {useState} from "react";
import ModalCall from "./ModalCall";

function CallBtn() {
    const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => {
        console.log("clickkkkkkkkkkkk")
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <div className="click-to-order">
          <button className="btn-call" onClick={handleShowModal}>
          <img     
            src="https://cdn-icons-png.flaticon.com/512/399/399403.png?w=740&t=st=1682449599~exp=1682450199~hmac=32ba8ddd39f6e86991eb6f8bcbe258973762827962ff54bf1a198cb7f6e8506f"
            alt="call"
          />
          </button>
          
        </div>
        {showModal && <ModalCall handleCloseModal={handleCloseModal} />}
      </>
    );
  }
  

export default CallBtn;