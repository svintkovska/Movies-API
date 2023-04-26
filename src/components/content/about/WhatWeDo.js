import React from "react";
import Button from "../../../elements/Button";

function WhatWeDo(){

    return (
      <>
        <section id="about">
          <div class="container">
            <h2 class="heading">What We Do</h2>
            <div class="row">
              <div class="column-2">
                <h3>For our users</h3>
                <h3>Apps for movie & TV show fans</h3>
                <img
                  src="https://www.justwatch.com/static/img/about-us/for-users-2.jpg"
                  width={"500px"}
                />
                <p>
                  We show you where you can legally watch movies and TV shows
                  that you love. You are kept up to date with what is new on
                  Netflix, Amazon Prime, Apple TV and many other streaming
                  platforms. Our simple filter system allows you to see only
                  what is important to you. We also allow users to track their
                  favorite shows and movies, and can notify you when a title is
                  available on one of your services...
                </p>
                <Button text='Learn more about our apps' myhref='https://www.justwatch.com/us/apps'/>
              </div>
              <div class="column-2">
                <h3>For our clients</h3>
                <h3>Next generation movie marketing</h3>
                <img
                  src="https://www.justwatch.com/static/img/about-us/for-clients-jw-media-2.jpg"
                  width={"500px"}
                />
                <p>
                  JustWatch Media helps Entertainment brands around the world
                  get to grips with new challenges and opportunities. From
                  blockbuster movies, award winning shows, major sporting events
                  and console games, we buy media for our clients across the
                  major digital platforms. We offer our clients something no one
                  else can, media buying based on audience content tastes.
                </p>
                <Button text='Learn more about our marketing campaings' myhref='https://media.justwatch.com/'/>

              </div>
            </div>
          </div>
        </section>
      </>
    );

}


export default WhatWeDo;