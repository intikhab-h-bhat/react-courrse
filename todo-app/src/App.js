import logo from './logo.svg';
import { getPosts } from './api';
import './App.css';

import React, {useEffect,useState} from 'react'
import PostCard from './components/PostCard';

// import Board from './TicTacToeGame/Board';
// import Header from './components/Header'
// import ToDoItem from './components/listItems'
// import Button from './components/Button';
// import CounterDemo from './components/countercomp';
// import './style.css';
// import Timer from './components/Timer';

function App() {

  const [data,setData]=useState(null);

  useEffect(()=>{
    getPosts().then((posts)=> setData(posts))  
  },[])
 

  return (    
    
    <div className="App">
      {
        data? data.map(e=> <PostCard title={e.title} body={e.body}/>): <p>No Data</p>
      }


    </div>
  );
};

export default App;
