import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
      navigate(`/usePopcorn/${query}`)
      
    }
  
  }
    return(
        <>
      <nav className="nav-bar">
        <Logo />
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