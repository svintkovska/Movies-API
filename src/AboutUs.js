import React from "react";
import Layout from "./Layout/Layout";
import AboutInfo from "./components/content/about/AboutInfo";
import Team from "./components/content/about/Team";
import WhatWeDo from "./components/content/about/WhatWeDo";
import Line from "./elements/Line";

function AboutUs() {
  return (
    <>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <AboutInfo />
          <Line/>
          <WhatWeDo />
          <Line/>
          <Team />
        </div>
      </Layout>
    </>
  );
}

export default AboutUs;