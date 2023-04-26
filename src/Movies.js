import React from "react";
import Layout from "./Layout/Layout";
import TopRated from "./components/content/movies/TopRated";
import Line from "./elements/Line";
import Trending from "./components/content/movies/Trending";
import Upcoming from "./components/content/movies/Upcoming";

function Movies(){

    return (
      <>
        <Layout>
          <div style={{ marginTop: "100px" }}>
           <Upcoming/>
            <Line/>
            <TopRated/>
            <Line/>
            <Trending/>
          </div>
        </Layout>
      </>
    );

}

export default Movies;