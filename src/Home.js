import React from "react";
import Layout from "./Layout/Layout";
import Genres from "./components/content/home/genres";
import Banner from "./elements/Banner";
import Slider from "./components/content/home/slider";
import Line from "./elements/Line";

function Home(){

    return (
      <>
       <Layout>
        <Banner title="JustWatch" textcolor="yellow"
        imgUrl="https://kartinkin.net/uploads/posts/2022-03/thumbs/1647010712_57-kartinkin-net-p-kinematograf-kartinki-62.jpg"/>
        <Slider/>
        <Line/>
       <Genres/>
       </Layout>
      </>
    );

}

export default Home;