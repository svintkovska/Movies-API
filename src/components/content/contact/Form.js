import React, { useState, useRef } from "react";
import SuccessMessage from "../../../elements/SuccessMessage";
import ErrorMessage from "../../../elements/ErrorMessage";

function Form(){
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const nRef = useRef("");
  const eRef = useRef("");
  const sRef = useRef("");
  const mRef = useRef("");

  const handlerSubmit = (event) => {
    event.preventDefault();
        if(!nRef.current.value  | !eRef.current.value | !sRef.current.value | !mRef.current.value)
        {
            setErrorMessage(true);
            return;
        }
      setErrorMessage(false);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 1000);


      nRef.current.value ="";
      eRef.current.value ="";
      sRef.current.value ="";
      mRef.current.value ="";
      
    
  };
    return(
        <>
        
        <section id="contacts">
              <div className="container">
                <h2 className="heading">Send Us Email</h2>
                <form  onSubmit={handlerSubmit}>
                {successMessage && <SuccessMessage message="Successfully sent" />}
                {errorMessage && <ErrorMessage message="Please fill in all fields" />}
                  <div className="row">
                    <div className="column-2">
                      <p>
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" name="username" ref={nRef}/>
                      </p>
                      <p>
                        <label htmlFor="useremail">Email</label>
                        <input type="email" id="useremail" name="useremail" ref={eRef}/>
                      </p>
                      <p>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="useremail" name="subject" ref={sRef}/>
                      </p>
                    </div>
                    <div className="column-2">
                      <p>
                        <label htmlFor="usermessage">Message</label>
                        <textarea
                          className="u-full-width"
                          id="usermessage"
                          name="usermessage"
                          ref={mRef}
                        ></textarea>
                      </p>
                      <p>
                        <input className="btn" type="submit" value="Submit" />
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
        </>
    );

}


export default Form;