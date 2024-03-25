import Reavt from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react"
import axios from "axios";
function SearchedMovies({movies,setMovies}){
    const key="e746763b";
    const [isOpen, setIsOpen] = useState(true);
    const [loading,setLoading]=useState(false);
    // const [searchedMovies, setSearchedMovies] = useState();
    const [error,setError]=useState("");
   let {searchedItem}=useParams();
  console.log(searchedItem);
  useEffect(()=>{
   
        axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${searchedItem}`).
        then(res=>{setMovies(res.data.Search)}).
        catch(err=>{console.log(err)})
//     async function fetchMovies(){ 
//      try{
//      setLoading(true);
//      setError("");
//      const res= await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${searchedItem}`)
//      if(!res.ok)
//        throw new Error("something went wrong");
  
//      const data=await res.json();
//      if(data.Response==="False")
//        throw new Error("Movies not found");
 
//      setSearchedMovies(data.Search);
//      console.log(data);
//    }catch(err){
//      console.error(err.message);
//      setError(err.message);
 
//    }finally{
//      setLoading(false);
//    }}
//    fetchMovies()
 },[searchedItem])
   
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
export default SearchedMovies;


function MoviesList({movies}){
    return(
      <>
       <ul className="list">
                {movies?.map((movie) => (
                  <Movie movies={movie} key={movie.imdbID}/>
                ))}
              </ul>
      </>
    )
  
  }
  function Movie({movies}){
    return(<>
         <li >
                    <img src={movies.Poster} alt={`${movies.Title} poster`} />
                    <h3>{movies.Title}</h3>
                    <div>
                      <p>
                        <span>🗓</span>
                        <span>{movies.Year}</span>
                      </p>
                    </div>
                  </li>
    
    </>)
  }