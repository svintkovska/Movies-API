import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieModal({ selectedFilm, handleCloseModal }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: "d8d6c5280f348313c8a7874bb72ebbb4",
        },
      })
      .then((response) => {
        const filteredGenres = response.data.genres.filter((genre) =>
          selectedFilm.genre_ids.includes(genre.id)
        );
        setGenres(filteredGenres);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="movie-card">
        <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
        <div className="container-modal">
          <a href="#">
            <img
              src={`https://image.tmdb.org/t/p/w400/${selectedFilm.poster_path}`}
              alt="cover"
              className="cover"
              width={"200px"}
            />
          </a>

          <div
            className="hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedFilm.backdrop_path})`,
            }}
          >
            <div className="details">
              <div className="title1">{selectedFilm.title}</div>

              <span className="rating">{selectedFilm.vote_average}</span>
              <span className="likes">109 likes</span>
            </div>
          </div>

          <div className="description">
            <div className="column1">
              {genres.map((genre) => (
                <span key={genre.id} className="tag">
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="column2">
              <p>{selectedFilm.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieModal;
