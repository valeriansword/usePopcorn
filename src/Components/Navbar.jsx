import React from "react";
import { useState } from "react";
function Logo(){
    return(<div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>)
}
function Search({query,setQuery}){
    return(
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
    )
}
function NumResult({movies}){
    return(
        <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    )
}

function Navbar({movies,query,setQuery}){
    
    return(
        <>
          <nav className="nav-bar">
        <Logo />
        <Search query={query} setQuery={setQuery}/>
       <NumResult  movies={movies}/>
       {/* <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p> */}
      </nav>
        </>
    )
}

export default Navbar;