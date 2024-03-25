import React from "react";
import { useState } from "react";
import {  useNavigate,Link } from "react-router-dom";
function Logo(){
  return(<div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>)
}


function NumResult({movies}){
  return(
      <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

function Navbar({movies,query,setQuery}){
  
  const navigate=useNavigate();
  const handleEvent=(event)=>{
    if(event.key==="Enter"){
      setQuery('')
      navigate(`/usePopcorn/SearchedMovies/${query}`);
      
    }
  
  }
    return(
        <>
      <nav className="nav-bar">
       <Link to="/usePopcorn/" style={{textDecoration:"none"}}><Logo /></Link> 
        <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEvent}
      />
        <NumResult movies={movies} />
       
       
      </nav>
        </>
    )
}

export default Navbar;