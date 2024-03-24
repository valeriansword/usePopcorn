import React from "react";
import { useState } from "react";

function Movie({movie}){
  return(<>
       <li >
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
  
  </>)
}
function MoviesList({movies}){
  return(
    <>
     <ul className="list">
              {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID}/>
              ))}
            </ul>
    </>
  )
}
function ListBox({movies}){
  const [isOpen1, setIsOpen1] = useState(true);
    return(
        <>
         <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <MoviesList movies={movies} />
          )}
          
        </div>

        
        </>
    )
}
export default ListBox;