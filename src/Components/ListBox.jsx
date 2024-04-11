import React from "react";
import { useState } from "react";



function Box({movies,setSelectedId,selectedId}){
  const [isOpen, setIsOpen] = useState(true);
  function handleSubmitMovie(id){
    setSelectedId((selectedId)=>id===selectedId?null:id);
  }
  
    return(
        <>
        
       
         <div className="box">
         <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          
          {isOpen && ( <MoviesList movies={movies} onSubmitMovie={handleSubmitMovie
          }/>
            
          )}
          {!isOpen && (<NoMoviesList />)}
        </div>

        
        </>
    )
}
export default Box;

function NoMoviesList(){
  return(
    <>
    
    <ul className="list">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
              {/* {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID}/>
              ))} */}
            </ul>
    </>
  )

}

function MoviesList({movies,onSubmitMovie}){
  return(
    <>
     <ul className="list list-movies">
              {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSubmitMovie={onSubmitMovie}/>
              ))}
            </ul>
    </>
  )
 
}

function Movie({movie,onSubmitMovie}){
  // const handleAdd=(selectedMovie)=>{
  //   console.log(selectedMovie);
  
  return(<>
       <li onClick={()=>{onSubmitMovie(movie.imdbID)}} >
                  <img  src={movie.Poster} alt={`${movie.Title} poster`} />
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