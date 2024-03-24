import React from "react";
import { useState } from "react";



function Box({movies}){
  const [isOpen, setIsOpen] = useState(true);
    return(
        <>
         <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && ( <MoviesList movies={movies} />
            
          )}
          
        </div>

        
        </>
    )
}
export default Box;
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