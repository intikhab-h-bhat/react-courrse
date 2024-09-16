import React,{useContext} from 'react'
import { CotextDemo } from '../context-api/context';
const ContextCounter=()=>{

    const counterdemo=useContext(CotextDemo);
    return(
            <div>
              <button onClick={()=>counterdemo.setCount(counterdemo.count +1)}>Increament</button>
              <button onClick={()=>counterdemo.setCount(counterdemo.count -1)}>Decreament</button>      


            </div>


    );
};

export default ContextCounter;