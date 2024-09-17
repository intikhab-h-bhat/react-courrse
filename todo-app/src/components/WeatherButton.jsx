import React from 'react'

const WeatherButton=(props)=>{

    return(

        <button className="btn" onClick={props.onClick}>
            {props.value}
        </button>
    );
};
export default WeatherButton;