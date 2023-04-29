import React from "react";
import SlideItem from "./SlideItem";

function Slider(){

    return (
      <>
        <div className="slider">
          <input type="radio" name="toggle" id="btn-1" checked />
          <input type="radio" name="toggle" id="btn-2" />
          <input type="radio" name="toggle" id="btn-3" />

          <div className="slider-controls">
            <label htmlFor="btn-1"></label>
            <label htmlFor="btn-2"></label>
            <label htmlFor="btn-3"></label>
          </div>

          <ul className="slides">
            <SlideItem title="Avatar 2" text="Everything we know about the upcoming sci-fi epic"
            imgUrl="https://www.nme.com/wp-content/uploads/2017/02/2017_avatar_Fox_030217.jpg"
            href="https://www.nme.com/blogs/the-movies-blog/avatar-2-release-date-plot-trailer-1966393"/>
            <SlideItem title="Shrek 5" text="Producer Wants To Reunite The Original Cast"
            imgUrl="https://images.bauerhosting.com/legacy/empire-tmdb/films/810/images/7fT1IogBbxM6S7SOIGSe7BXLEMq.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            href="https://www.empireonline.com/movies/news/shrek-5-producers-want-to-reunite-the-original-cast/"/>
            <SlideItem title="Ben Affleck" text="Confirms He Won’t Be Directing Any DC Movies"
            imgUrl="https://images.bauerhosting.com/empire/2023/03/ben-affleck-bruce-wayne.jpg?q=80&auto=format&w=750&ar=16:9&fit=crop&crop=top"
            href="https://www.empireonline.com/movies/news/5/"/>
            
          </ul>
        </div>
      </>
    );

}


export default Slider;