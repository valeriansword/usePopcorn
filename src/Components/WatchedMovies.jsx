import React, { useEffect } from "react";
import { useState } from "react";
import tempWatchedData from "../Utils/tempWatchedData";
import axios from "axios";
import StarRating from "./StarRating";
function WatchedMovies({selectedId,closeMovie}){

  const [watched, setWatched] = useState([]);
    
    const[userRating,setUserRating]=useState('');
    const [isOpen2, setIsOpen2] = useState(true);
   function handleAddWatch(movie){
    setWatched(watched=>[...watched,movie]);
   }
   
    return(
        <>
         <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            selectedId ? <MovieDetail watched={watched} selectedId={selectedId} userRating={userRating} setUserRating={setUserRating} onWatchedAdd={handleAddWatch} closeMovie={closeMovie}/> :
            <>
           <WatchedSummary watched={watched} />
              <WatchedList watched={watched} setWatched={setWatched} />
           
            </>
          )}
        </div>
        </>
    )
}
export default WatchedMovies;

function MovieDetail({selectedId,closeMovie,onWatchedAdd,watched,setUserRating,userRating}){
  const [movie,setMovie]=useState([]);
  const[loading,setLoading]=useState(false);
  const isWatched=watched.map((movie)=>movie.imdbId).includes(selectedId);
  const watchedUserRating=watched.find((movie)=>movie.imdbId===selectedId)?.userRating;

  const{
    Title:title,
    Year:year,
    Poster:poster,
    Released:released,
    Runtime:runtime,
    imdbRating,
    Plot:plot,
    Actors:actors,
    Director:director,
    Genre:genre
  }=movie;
  async function fetchData(){
    setLoading(true);
    let response=await axios.get(`http://www.omdbapi.com/?apikey=e746763b&i=${selectedId}`);
    let user=await response.data;
    setMovie(user);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[selectedId]);
  function handleAdd(){
    const newWatchedMovie={
      imdbId:selectedId,
      title,
      year,
      poster,
      imdbRating:Number(imdbRating),
      runtime:Number(runtime.split(" ").at(0)),
      userRating

    };
    onWatchedAdd(newWatchedMovie);
    closeMovie();
    // console.log(userRating);
  }
  return(
  
  <div className="details">
    <button onClick={closeMovie} >&larr;</button>
    {loading?<h2>Loading</h2>:
    <>
     <header>
    
    <img src={poster} alt="poster" />
    <div className="details-overview">
      <h2>{title}</h2>
      <p>{released} &bull; {runtime}</p>
      <p>{genre}</p>
      <p>
        <span>⭐️</span>
        {imdbRating} IMDB Rating

      </p>
    </div>
    </header>
    <section>
      <div>

      
       {
        !isWatched ?
        <>
        <StarRating maxRating={10} size={20} onSetRating={setUserRating}/>
       
       {
         userRating > 0 &&(
           <button className="btn-add" onClick={handleAdd}>Add to watchlist</button>
  
         )
       }
        </>:
        <p>you have already watched and rated {watchedUserRating}</p>
       }
        
      
       {/* <p>you have already watched</p> */}
     
         
         
          
           </div>
      <p><em>{plot}</em></p>
      <p>staring:{actors}</p>
      <p>{director}</p>
    </section>

    </>
    
    }
   
    {selectedId}
    </div>)

}
function WatchedList({watched,setWatched}){
  function handleDelete(id){
    console.log(id);
    setWatched((watched)=>watched.filter(movie=>movie.imdbId!=id));

   }
  return(
    <>
          <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbId}>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                      <button className="btn-delete" onClick={()=>handleDelete(movie.imdbId)}>X</button>
                    </div>
                  </li>
                ))}
              </ul>
    </>
  )
}

function WatchedSummary({watched})
{

  const average = (arr) =>
      arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  
  return(<>
    <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length}movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(1)}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(1)}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>


  </>)
}