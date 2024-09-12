import React,{useState,useEffect} from 'react';
import Square from './Square';

const Board = (props)=>{
const [state,setState]=useState(Array(9).fill(null))
const [isXTurn,setIsXTurn]=useState(true);

function handleclick(index){
   const copyState=[...state];
   copyState[index]=isXTurn? "X":"O"
   setState(copyState);
   setIsXTurn(!isXTurn);
}

return(
    <div className="board-container"> 

    <div className="board-row">
        <div><Square onClick={()=> handleclick(0)} value={state[0]} /></div>
        <div><Square onClick={()=> handleclick(1)} value={state[1]}/> </div>
        <div><Square onClick={()=> handleclick(2)} value={state[2]} /></div>
    </div>
    <div className="board-row">
        <div> <Square value={state[3]}/></div>
        <div> <Square value={state[4]}/></div>
        <div> <Square value={state[5]}/></div>
    </div>
    <div className="board-row">
        <div> <Square value={state[6]}/></div>
        <div> <Square value={state[7]}/></div>
        <div> <Square value={state[8]}/></div>
    </div>  

    </div>
);

}

export default Board;