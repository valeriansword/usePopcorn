import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
// import Movies from "./Components/Movies";
import Body from "./Components/Body";
import tempMovieData from "./Utils/tempMovieData";


export default function App() {
    const key="e746763b";
  const [movies, setMovies] = useState(tempMovieData);
  const [query,setQuery]=useState();
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  
  useEffect(()=>{
   

   async function fetchMovies(){ 
    try{
    setLoading(true);
    setError("");
    const res= await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`)
    if(!res.ok)
      throw new Error("something went wrong");
 
    const data=await res.json();
    if(data.Response==="False")
      throw new Error("Movies not found");

    setMovies(data.Search);
    console.log(data);
  }catch(err){
    console.error(err.message);
    setError(err.message);

  }finally{
    setLoading(false);
  }}
  fetchMovies()
},[query])
  

  

  return (
    <>
      <Navbar  movies={movies} query={query} setQuery={setQuery}/>
      {/* {loading ?<p>Loading</p>:<Body movies={movies} />} */}
      {
        loading && (<p>Loading....</p>)
      }
      {
        !loading && !error && (<Body movies={movies} />)
      }
      {error && (<p>{error}</p>)}
    
       

       
      
    </>
  );
}