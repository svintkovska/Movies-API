import React, { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day", {
        params: {
          api_key: "d8d6c5280f348313c8a7874bb72ebbb4",
        },
      })
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2 className="heading">Trending</h2>
      {films.slice(0, 4).map((film, id) => (
        <div class="movie_card" id="bright" key={id}>
          <div class="info_section">
            <div class="movie_header">
              <img
                class="locandina"
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              />
              <h1>{film.original_title}</h1>
            </div>
            <div class="movie_desc">
              <p class="movie-decs-text">{film.overview}</p>
            </div>
            <div className="row-min-year">
              <h4 class="minutes">{film.vote_average}</h4>
              <h4 class="minutes">{film.release_date}</h4>
            </div>
          </div>
          <div
            class="blur_back bright_back"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${film.poster_path})`,
            }}
          ></div>
        </div>
      ))}
    </>
  );
}

export default Trending;
