import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Upcoming(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
      axios
      .get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
        params: {
          api_key: "d8d6c5280f348313c8a7874bb72ebbb4",
        },
      })
      .then(response => {
          setFilms(response.data.results)
      })
      .catch((error) => console.error(error));
  }, []);
   
    console.log("--------", films);
    return (
      <>
    <h2 className="heading">Upcoming</h2>
        <div class="accordion">
          <ul>
          {films.slice(0, 6).map((film, id) => (
         <li key={id}>
         <div class="image_title">
            <a>{film.original_title}</a>
           <a href="#">{film.release_date}</a>
         </div>
         <a href="">
           <img
             src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
             alt={film.original_title}
             border="0"
           />
         </a>
       </li>
      ))}
           
           
          </ul>
        </div>
        {/* 
       <section id="portfolio">
  <div className="container">
    <h2 className="heading">Upcoming</h2>
    <div className="row">
      {films.slice(0, 9).map((film, id) => (
        <div
          className="portfolio-item column-3"
          key={id}
          data-descr={film.original_title}
          width={"400px"}
          height={"600px"}
        >
          <a target="_blank" href={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              className="img-fluid"
              alt={film.original_title}              
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</section> */}
      </>
    );

}


export default Upcoming;