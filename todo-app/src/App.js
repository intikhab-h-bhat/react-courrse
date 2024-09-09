import logo from './logo.svg';
import './App.css';

import React, {useEffect,useState} from 'react'
import Header from './components/Header'
import ToDoItem from './components/listItems'
import Button from './components/Button';
import CounterDemo from './components/countercomp';
import './style.css';
import Timer from './components/Timer';

function App() {
  // const [isVisible, setIsVisible]=useState(true)
  return (    
    
    <div className="todo-container">
      <Timer/>

     {/* {isVisible?<CounterDemo/>:<></>}
      <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button> 

     <Header title="Daily schedule"/>
      <ToDoItem text="Eat" completed="true"/>
      <ToDoItem text="Code"/>
      <ToDoItem text="Sleep"/>
      <ToDoItem text="Repeat"/>
      <Button/> */}
    </div>
  );
};

export default App;
