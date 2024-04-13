import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
// import Movies from "./Components/Movies";
import Body from "./Components/Body";
import tempMovieData from "./Utils/tempMovieData";



import {BrowserRouter,Routes,Route} from "react-router-dom";
import WatchedMovies from "./Components/WatchedMovies";
import SearchedMovies from "./Components/SearchedMovies";

export default function App() {

 
  const [movies, setMovies] = useState(tempMovieData);
  const [query,setQuery]=useState();
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const [selectedId,setSelectedId]=useState("");
 
  
//   useEffect(()=>{
   

//    async function fetchMovies(){ 
//     try{
//     setLoading(true);
//     setError("");
//     const res= await fetch(`http://www.omdbapi.com/?apikey=${key}&s=avengers`)
//     if(!res.ok)
//       throw new Error("something went wrong");
 
//     const data=await res.json();
//     if(data.Response==="False")
//       throw new Error("Movies not found");

//     setMovies(data.Search);
    
//   }catch(err){
//     console.error(err.message);
//     setError(err.message);

//   }finally{
//     setLoading(false);
//   }}
//   fetchMovies()
// },[])
  
function closeMovie(){
  setSelectedId(null);
}
  

  return (
    <>
      

      {/* {loading ?<p>Loading</p>:<Body movies={movies} />} */}
     
      <BrowserRouter>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
    
{/* 
      {
        loading && (<p>Loading....</p>)
      }
       {
        !loading && !error && ( */}
      <Routes>
      {/* <Body movies={movies}/> */}
        
          
      <Route path="/usePopcorn" element={<Body movies={movies} closeMovie={closeMovie} selectedId={selectedId} setSelectedId={setSelectedId}/>} ></Route>
       <Route path="/usePopcorn/SearchedMovies/:searchedItem" element={<SearchedMovies closeMovie={closeMovie} movies={movies} selectedId={selectedId} setSelectedId={setSelectedId} setMovies={setMovies} />}></Route>
             
           
           
         
      
        <Route></Route>
      </Routes> {/*)
            }{error && (<p>{error}</p>)} */}
           
      </BrowserRouter>
       
    
       

       
      
    </>
  );
}
//Navbar


//Listbox


//watchedSummary
