import React from "react";
import Layout from "./Layout/Layout";
import Reviews from "./components/content/testimonials/Reviews";
import Clients from "./components/content/testimonials/Clients";
import Banner from "./elements/Banner";

function Testimonials(){

    return (
      <>
        <Layout>
        <Banner imgUrl="https://thelovelawfirm.com/wp-content/uploads/2019/04/testimonials-banner.jpg"
        subtitle="Discover What Our Customers Say"/>
        <Reviews/>
        <Clients/>
        </Layout>
      </>
    );

}

export default Testimonials;