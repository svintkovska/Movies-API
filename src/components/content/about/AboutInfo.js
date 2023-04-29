import React from "react";

function AboutInfo(){

    return (
      <>
        <section id="about">
          <div className="container">
            <h2 className="heading">About Us</h2>
            <p>
              Movies, Shows, Sports & Gaming. We only buy media for the
              entertainment industry. From the biggest blockbusters to award
              winning shows, major sporting events and best selling console
              games.
            </p>
            <div className="row">
              <div className="column-2">
                <h3>Our Process</h3>
                <p>
                  We only show 100% legal offers on many different platforms for
                  paid subscriptions, free streaming, streaming with ads, for
                  rental and for purchase. You can use our filters to only see
                  certain kinds of offers, and can also choose the streaming
                  services you already have to only see content available to
                  you. JustWatch now can create personalized recommendations for
                  you to find what to watch based on your taste and the
                  providers you choose - and we do all this for free!
                </p>
                <h3>Our Features</h3>
                <p>
                  We do have an enhanced version of the JustWatch experience
                  called JustWatch Pro, that offers a growing number of
                  additional features on a monthly subscription. JustWatch does
                  however display other services that do charge for a
                  subscription or fee - Netflix, Amazon Prime, or Google Play
                  for example.
                </p>
                <h3>Our srvice</h3>
                <p>
                  We create, we cut, we localise, we measure and we make better.
                  Our creative team lives and breathes entertainment.
                </p>
              </div>
              <div className="column-2">
                <img
                  src="https://play-lh.googleusercontent.com/Riuz226TXAawu8ZXlL7wnsjtMHkTMTDh_RSRiozAdoKe2TyGG4cLp3rPB0CxQFEUzFc"
                  class="img-fluid img-border"
                  width={"500px"}
                  alt="About us"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );

}


export default AboutInfo;