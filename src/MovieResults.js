import React, { useState, useEffect } from "react";
import MovieModal from "./components/content/movies/MovieModal";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Layout from "./Layout/Layout";

function MovieResults() {
  const [showModal, setShowModal] = useState(false);
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState();
  const {query} = useParams();
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "d8d6c5280f348313c8a7874bb72ebbb4",
            query: query
          },
        }
      )
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [query, searchKey]);

  function handleCloseModal() {
    setShowModal(false);
  }

  function showModalHandler(film) {
    setSelectedFilm(film);
    setShowModal(true);
  }


  return (
    <>
    <Layout>
  <div style={{ height: "10px" }}></div>
  {films.length > 0 ? (
    <div className="container-movies-by-genre">
      {films.slice(0, 12).map((film) => (
        <div className="column is-one-quarter" key={film.id}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
            onClick={() => showModalHandler(film)}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="heading" style={{marginTop: "65px", height: "50vh"}}>Not found</div>
  )}
  {showModal && (
    <MovieModal
      selectedFilm={selectedFilm}
      handleCloseModal={handleCloseModal}
    />
  )}
</Layout>

   
    </>
  );
}

export default MovieResults;
