import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopRated(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
      axios
      .get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
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
       <h2 className="heading">Top Rated</h2>
        <div class="container-topfilms">
        {films.slice(0, 4).map((film, id) => (
          <div class="column is-one-quarter" key={id}>
              <img src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`} />
            </div>
        ))}
                   
        </div>

        {/* <section id="portfolio">
  <div className="container">
    <h2 className="heading">Popular</h2>
    <div className="row">
      {films.slice(0, 6).map((film, id) => (
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


export default TopRated;