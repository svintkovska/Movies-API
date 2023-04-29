import React, { useState, useEffect} from 'react';
import Layout from "./Layout/Layout";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieModal from './components/content/movies/MovieModal';

function MoviesByGenre(){
  const { genre } = useParams();
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: 'd8d6c5280f348313c8a7874bb72ebbb4'
      }
    })
    .then(response => setGenres(response.data.genres))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const genreId = genres.find(g => g.name.toLowerCase() === genre.toLowerCase())?.id;
    console.log("id", genreId);
    if (!genreId) return;

    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: 'd8d6c5280f348313c8a7874bb72ebbb4',
        with_genres: genreId
      }
    })
    .then(response => setFilms(response.data.results))
    .catch(error => console.error(error));
  }, [genre, genres]);



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
          <h2 className="heading">{genre} Movies</h2>
          <div className="container-movies-by-genre">
            {films.slice(0, 12).map((film, id) => (
              <div className="column is-one-quarter" key={id}>
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
        </Layout>
      </>
    );

}

export default MoviesByGenre;