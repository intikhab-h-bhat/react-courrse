// export const getPosts=async()=>{

//    const response= await fetch("https://jsonplaceholder.typicode.com/posts",
//         {method:"GET"});

// return await response.json();
// }

// export const getRandomUser=async()=>{

//     const resp=await fetch("https://randomuser.me/api",{method:"GET"})

//     return await resp.json();
// }

const baseUrl="https://api.weatherapi.com/v1/current.json?key=fd693f8883ee42dbb5893028242406"
export const getWeatherData= async(city)=>{

    const response= await fetch(`${baseUrl}&q=${city}&aqi=yes`,{method:"GET"})

    return response.json();
}


export const getWeatherDataLocation= async(lat,lon)=>{

    const response= await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`,{method:"GET"})

    return response.json();
}
