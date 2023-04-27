import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";

function TopRated() {
  const [films, setFilms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          params: {
            api_key: "d8d6c5280f348313c8a7874bb72ebbb4",
          },
        }
      )
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleCloseModal() {
    setShowModal(false);
  }

  function showModalHandler(film) {
    setSelectedFilm(film);
    setShowModal(true);
  }

  return (
    <>
      <h2 className="heading">Top Rated</h2>
      <div class="container-topfilms">
        {films.slice(0, 4).map((film, id) => (
          <div class="column is-one-quarter" key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
              onClick={() => showModalHandler(film)}
            />
          </div>
        ))}
      </div>
      {showModal && (
        <MovieModal
          selectedFilm={selectedFilm}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default TopRated;
