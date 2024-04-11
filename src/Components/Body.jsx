import React from "react";
import Box from "./ListBox";
import WatchedMovies from "./WatchedMovies";
function Body({movies,selectedId,closeMovie,setSelectedId}){
    return(
    <>
          <main className="main">
          <Box movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
          <WatchedMovies closeMovie={closeMovie} selectedId={selectedId}/>
          </main>
    </>
    
    )
}

export default Body;