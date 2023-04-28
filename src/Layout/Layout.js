import React, { useState, useEffect } from "react";
import Main from "../components/content/Main";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import axios from "axios";


function Layout({children}){

  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchText) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'YOUR_API_KEY_HERE',
          query: searchText,
        },
      });

      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };



    return (
      <>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    );

}

export default Layout;