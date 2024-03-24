import React from "react";
import Box from "./ListBox";
import WatchedMovies from "./WatchedMovies";
function Body({movies}){
    return(
    <>
          <main className="main">
          <Box movies={movies}/>
          <WatchedMovies />
          </main>
    </>
    
    )
}

export default Body;