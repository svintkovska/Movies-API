import React from "react";

function Search(){
  return (
    <>
      <li>
        <div class="search-container">
          <form>
            <div class="search-wrapper">
              <input type="text" required placeholder="Search" />
              <img
                src="https://cdn-icons-png.flaticon.com/512/40/40407.png?w=740&t=st=1682370189~exp=1682370789~hmac=77513e032152f53540b0ebb81919dc899ea4fa3065af388bdc5156019ff3dd7d"
                alt="Search icon"
              />
            </div>
          </form>
        </div>
      </li>
    </>
  );
}

export default Search;