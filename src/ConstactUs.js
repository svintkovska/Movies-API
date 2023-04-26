import React from "react";
import Layout from "./Layout/Layout";
import Form from "./components/content/contact/Form";
import GetInTouch from "./components/content/contact/GetInTouch";

function ContactUs(){

    return (
      <>
        <Layout>
          <GetInTouch />
          <Form />
        </Layout>
      </>
    );

}

export default ContactUs;