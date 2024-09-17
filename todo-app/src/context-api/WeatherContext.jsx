import {createContext,useContext,useState} from 'react'
import { getWeatherData, getWeatherDataLocation } from '../api'

const ContextWeather=createContext(null)

export const useWeather=()=>{
const weatherDetails=useContext(ContextWeather)
return weatherDetails
}

export const WeatherProvider=(props)=>{
const [data,setData]=useState(null);
const [searchCity,setSearchCity]=useState(null);
const fetchData=async()=>{
    const response= await getWeatherData(searchCity);
    setData(response);
};

const fetchUserLocationData=async()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        getWeatherDataLocation(
            position.coords.latitude,
            position.coords.longitude).then(data=> setData(data));
    });
    
    };


return(
    <ContextWeather.Provider value={{data,searchCity,setSearchCity,fetchData,fetchUserLocationData}}>
       {props.children
       }
    </ContextWeather.Provider>
);

}