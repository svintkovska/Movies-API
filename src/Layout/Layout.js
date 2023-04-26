import React from "react";
import Main from "../components/content/Main";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


function Layout({children}){

    return (
      <>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    );

}

export default Layout;