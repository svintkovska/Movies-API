import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";

function Upcoming() {
  const [films, setFilms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
      <h2 className="heading">Upcoming</h2>
      <div class="accordion">
        <ul>
          {films.slice(0, 6).map((film, id) => (
            <li key={id}>
              <div class="image_title" onClick={() => showModalHandler(film)}>
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
        {showModal && (
          <MovieModal
            selectedFilm={selectedFilm}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default Upcoming;
