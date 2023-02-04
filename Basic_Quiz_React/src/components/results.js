import React from "react";

const Result = ({score,playAgain}) =>(
    <div className="score-board">
       
        <button className="playBtn" onClick ={playAgain}> 
            Play Again!!!!        
        </button>
        <div className="score"> You Scored: {score}/5 correct answers!!</div>
    </div>
);

export default Result;