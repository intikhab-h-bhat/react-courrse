import React,{useState} from 'react';
import Square from './Square';

const Board = (props)=>{
const [state,setState]=useState(Array(9).fill(null))
const [isXTurn,setIsXTurn]=useState(true);

const checkWinner=()=>{
const winnerLogic=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
for(let logic of winnerLogic){
    const [a,b,c]=logic;
    if(state[a]!== null && state[a]===state[b] && state[a]=== state[c]){
        // return true;
        return state[a];
    }
      
};
return false;

};

const isWinner=checkWinner();

function handleclick(index){
   const copyState=[...state];
   copyState[index]=isXTurn? "X":"O"
   setState(copyState);
   setIsXTurn(!isXTurn);
}

return(
    <div className="board-container"> 

      { isWinner ? (<>{isWinner} won the game</>):( 
      <>
      <div className="board-row">
        <div><Square onClick={()=> handleclick(0)} value={state[0]} /></div>
        <div><Square onClick={()=> handleclick(1)} value={state[1]}/> </div>
        <div><Square onClick={()=> handleclick(2)} value={state[2]} /></div>
    </div>
    <div className="board-row">
        <div> <Square onClick={()=> handleclick(3)} value={state[3]}/></div>
        <div> <Square onClick={()=> handleclick(4)} value={state[4]}/></div>
        <div> <Square onClick={()=> handleclick(5)} value={state[5]}/></div>
    </div>
    <div className="board-row">
        <div> <Square onClick={()=> handleclick(6)} value={state[6]}/></div>
        <div> <Square onClick={()=> handleclick(7)} value={state[7]}/></div>
        <div> <Square onClick={()=> handleclick(8)} value={state[8]}/></div>
    </div>  
    </>)
    }
    </div>
);

}

export default Board;