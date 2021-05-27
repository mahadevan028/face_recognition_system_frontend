import React from 'react';
import './FaceRecogniser.css';



function FaceRecogniser({imageUrl,dimensions}){
    return(
   <div className='center ma'>
       <div className="absolute mt2">
       <img id='imageInput' src={imageUrl} alt='imageInput' width="500px" height="auto"></img>
       <div className ="bounding-box" 
       style={{top:dimensions.topRow, right:dimensions.rightColumn, bottom:dimensions.bottomRow, left:dimensions.leftColumn}} 
       ></div>
   </div>
   </div>
    );
}

export default FaceRecogniser; 