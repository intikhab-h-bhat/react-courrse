import React from 'react';
import { useWeather } from '../context-api/WeatherContext';

const Input=()=>{
const weather=useWeather();
    return(        
            <input className="input-field" 
            placeholder="Enter the city name"
            value={weather.searchCity}
            onChange={(e)=>weather.setSearchCity(e.target.value)} /> 

    );

};
export default Input;