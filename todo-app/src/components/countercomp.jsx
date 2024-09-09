import React , {useState,useEffect} from 'react';


const CounterDemo=()=>{
const [count, setCount]=useState(0);

useEffect(()=>{
        console.log("component mounted")
        return function(){
                console.log("Un mounted")
        }
},[])

useEffect(()=>{
        console.log("Component updated",count)
        return function(){
                console.log("Component removed",count)
        }
},[count])

return(<div>
        <p>Counter-Count-{count}</p>
        <p>Number Is  {count%2===0?"Even":"Odd"}</p>
        <button onClick={()=> setCount(count+1)}>Increament Counter</button>
        <button onClick={()=> setCount(count-1)}>Decreament Counter</button>

</div>);


};

export default CounterDemo;