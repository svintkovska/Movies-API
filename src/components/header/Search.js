import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(){
  const [query, setQuery] = useState("");
  const navigator = useNavigate();
  const handlerInput = (event) =>{
    setQuery(event.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(query === "")
    {
      return;
    }
    navigator(`/movies/search/${query}`);
  };
  return (
    <>
      <li>
        <div class="search-container">
          <form onSubmit={handleSubmit}>
            <div class="search-wrapper">
              <input type="text" required placeholder="Search" onChange={handlerInput}/>
              <button type="submit" style={{background: "none", border: "none"}}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/40/40407.png?w=740&t=st=1682370189~exp=1682370789~hmac=77513e032152f53540b0ebb81919dc899ea4fa3065af388bdc5156019ff3dd7d"
                  alt="Search icon"
                />
              </button>
            </div>
          </form>
        </div>
      </li>
    </>
  );
}

export default Search;