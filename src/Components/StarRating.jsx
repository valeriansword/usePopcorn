import React, { useState } from "react";
const containerStyle={
    display:"flex",
    alignItems:"center",
    gap:"16px"
}
const starContainerStyle={
    display:"flex",
    gap:"4px"

}


function StarRating({
    maxRating=5,
    color="#fcc419",
    onSetRating,
    size=48}){
    const [rating,setRating]=useState(0);
    const [tempRating,setTempRating]=useState(0)
    const textStyle={
        lineHeight:"1",
       
        margin:"0",
        color,
        fontSize:`${size/1.5}px`,
    }
function handleRating(rating){
    setRating(rating);
    onSetRating(rating);

}
    return(
        <div style={containerStyle}>  
            <div style={starContainerStyle}>
                {Array.from({length:maxRating},(_,i)=>
                 <Star key={i} color={color} size={size}  onRate={()=>handleRating(i+1)}
                  full={tempRating ? tempRating>=i+1 : rating>=i+1} 
                  onHoverIn={()=>setTempRating(i+1)}
                  onHoverOut={()=>setTempRating(0)}/>)}
            
            </div>
            <p style={textStyle}>{tempRating ||rating || ""}</p>
        </div>
    )
}

export default StarRating;
function Star({onRate,full,onHoverIn,onHoverOut,color,size}){
    const starStyle={
        // width:`${size}px`,
        // height:`${size}px`,
        display:"block",
        cursor:"pointer",
       
    }
   return( 
   <span role="button" style={starStyle} onClick={onRate}
   onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}> 
   {full ? 
   (

    <svg xmlns="http://www.w3.org/2000/svg" width={size} stroke={color} height={size} fill={color} class="bi bi-star-fill" viewBox="0 0 16 16">
             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
        ):
   (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} stroke={color} fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
             <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
    </svg>)  }
    </span>
    
    )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
             <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg> */}