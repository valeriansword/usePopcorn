import Reavt from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react"
import axios from "axios";
import Body from "./Body";
import Box from "./ListBox";
import WatchedMovies from "./WatchedMovies";
function SearchedMovies({movies,setMovies,setSelectedId,selectedId,closeMovie}){
    const key="e746763b";
    const [isOpen, setIsOpen] = useState(true);
    const [loading,setLoading]=useState(false);
    // const [searchedMovies, setSearchedMovies] = useState();
    const [error,setError]=useState("");
   let {searchedItem}=useParams();
  // console.log(searchedItem);
  useEffect(()=>{
   
        axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${searchedItem}`).
        then(res=>{setMovies(res.data.Search)}).
        catch(err=>{console.log(err)})
 },[searchedItem]);
 function handleSubmitMovie(id){
  setSelectedId((selectedId)=>id===selectedId?null:id);
}
   
    return(
        <>
         {/* <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && ( <MoviesList movies={movies} onSubmitMovie={handleSubmitMovie
          }/>
            
          )}
          
        </div> */}<main className="main">
          <Box movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
          <WatchedMovies closeMovie={closeMovie} selectedId={selectedId}/>
          </main>
          
        </>
    )
}
export default SearchedMovies;


// function MoviesList({movies,onSubmitMovie}){
//     return(
//       <>
//        <ul className="list">
//                 {movies?.map((movie) => (
//                   <Movie movies={movie} onSubmitMovie={onSubmitMovie} key={movie.imdbID}/>
//                 ))}
//               </ul>
//       </>
//     )
  
//   }
//   function Movie({movies,onSubmitMovie}){
//     return(<>
//          <li onClick={()=>{onSubmitMovie(movies.imdbId)}}>
//                     <img src={movies.Poster} alt={`${movies.Title} poster`} />
//                     <h3>{movies.Title}</h3>
//                     <div>
//                       <p>
//                         <span>🗓</span>
//                         <span>{movies.Year}</span>
//                       </p>
//                     </div>
//                   </li>
    
//     </>)
//   }