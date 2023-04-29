import React, { useState, useEffect, useRef } from "react";

function ModalCall({ handleCloseModal }) {
  const [seconds, setSeconds] = useState(30);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const tRef = useRef("");
  const phoneRegex = /^(\+38)?(0\d{9})$/  ;

  useEffect(() => {
    if (isCountingDown) {
      const countdown = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [isCountingDown]);

  useEffect(() => {
    if (seconds === 0) {
      handleCloseModal();
    }
  }, [seconds, handleCloseModal]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!tRef.current.value | !phoneRegex.test(tRef.current.value) ) {
      tRef.current.focus();
      return;
    }

    setIsCountingDown(true);
  };

  return (
    <>
      <div className="order_call_div" id="order_call_div">
        <p id="close_order_call" onClick={handleCloseModal}>
          &#10006;
        </p>
        <h2>We will call you in 30 seconds</h2>
        <form className="input_btn" onSubmit={handlerSubmit}>
          <input type="tel" placeholder="Phone number" required ref={tRef} />

          <button id="wait_for_call_btn">Call Me</button>
        </form>
        <label>Example: 067 000 00 00</label>
        <div className="countdown_div">
          <div>0</div>
          <div id="seconds">{seconds}</div>
        </div>
      </div>
    </>
  );
}

export default ModalCall;