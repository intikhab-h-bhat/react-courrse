import logo from './logo.svg';
//import { getPosts,getRandomUser} from './api';
import './App.css';

import React, {useEffect,useState,useContext} from 'react'
import Card from './components/card';
import Input from './components/Input';
import WeatherButton from './components/WeatherButton';
import { useWeather } from './context-api/WeatherContext';

// import PostCard from './components/PostCard';
// import UserCard from './components/UserCard';
// import Item from './components/Item';

// import Cart from './components/cart';

// import Board from './TicTacToeGame/Board';
// import Header from './components/Header'
// import ToDoItem from './components/listItems'
// import Button from './components/Button';
// import CounterDemo from './components/countercomp';
// import './style.css';
// import Timer from './components/Timer';

function App() {

 
  // const [data,setData]=useState(null); 
  // const [userInfo,setUserInfo]=useState(null);

  // useEffect(()=>{
  //     getPosts().then(posts=>setData(posts))
  // },[]);   

  // useEffect(()=>{
  //   getRandomUser().then(user=>setUserInfo(user.results[0]))

  // },[])

  // const refresh=()=>{
  //   getRandomUser().then(user=>setUserInfo(user.results[0]))
  // }
     const weather=useWeather();
    
     useEffect=(()=>{
         weather.fetchUserLocationData()
     },[])

  return (    
    
    <div className="App">
      <h1>Weather Forecast</h1>
      {/* {userInfo && <UserCard data={userInfo}/>}
      <button onClick={refresh}>Random User</button>
      {
       data? data.map(e => <PostCard title={e.title} body={e.body} />): <p>No Data</p>
      } */}
      {/* <Item name="Hard Disk" price="1000"/>
      <Item name="Pan drive" price="100"/>
      <Item name="Laptop" price="10000"/>

      <Cart/> */}
      <Input/>
      <WeatherButton onClick={weather.fetchData} value="Search"/>
      <Card/>      
      <WeatherButton value="Refresh"/>

    </div>
  );
};

export default App;
