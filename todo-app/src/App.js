import logo from './logo.svg';
import { getPosts,getRandomUser} from './api';
import './App.css';

import React, {useEffect,useState} from 'react'
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

// import Board from './TicTacToeGame/Board';
// import Header from './components/Header'
// import ToDoItem from './components/listItems'
// import Button from './components/Button';
// import CounterDemo from './components/countercomp';
// import './style.css';
// import Timer from './components/Timer';

function App() {

  const [data,setData]=useState(null); 
  const [userInfo,setUserInfo]=useState(null);

  useEffect(()=>{
      getPosts().then(posts=>setData(posts))
  },[]);   

  useEffect(()=>{
    getRandomUser().then(user=>setUserInfo(user.results[0]))

  },[])

  const refresh=()=>{
    getRandomUser().then(user=>setUserInfo(user.results[0]))
  }
     

  return (    
    
    <div className="App">
      {userInfo && <UserCard data={userInfo}/>}
      <button onClick={refresh}>Random User</button>
      {
       data? data.map(e => <PostCard title={e.title} body={e.body} />): <p>No Data</p>
      }
    </div>
  );
};

export default App;
