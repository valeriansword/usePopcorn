import React from "react";
import ListBox from "./ListBox";
import WatchedMovies from "./WatchedMovies";
function Body({movies}){
    return(
    <>
          <main className="main">
             <ListBox movies={movies} />
             <WatchedMovies />
          </main>
    </>
    
    )
}

export default Body;