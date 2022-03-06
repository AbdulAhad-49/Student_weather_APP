// For api calls
// For api calls we used service named acuweather

// api key for accuweather
const key ='q1wJWUQDoEC6FmF7xMV9jVHKI2CTU6mU';

// Location Api 
// http://dataservice.accuweather.com/locations/v1/cities/search
// Resource URl is the base URL 

// WE have 2 differents end points

// This function getCity give us the location of cities.
const getCity=async (city)=>{
    // baseUrl is bascially Resorce url we used for fetch cities data
    const baseUrl='http://dataservice.accuweather.com/locations/v1/cities/search';
const query=`?apikey=${key}&q=${city}`;
const response= await fetch(baseUrl + query);
// This fetch returns as a promise
// response.json returns as a promise  
// jab hamara promise full fill hojay phir wo hamara data to hum is k liy await lahy gyn
const data =await response.json();
// console.log(data);
return data[0];
}

// getCity('lahore')
// .then(data=>{
//     console.log(data);
//     // console.log(data[0].Key);
// })
// .catch(err=>{
//     console.log(err);
// })
// Now we use current condition api It returns current conditions data for a specific loaction.Current condition searches require a Location Key.
// http://dataservice.accuweather.com/currentconditions/v1/{locationKey}

const getWeather=async (id)=>{
     
     const baseUrl='http://dataservice.accuweather.com/currentconditions/v1/';
     const query=`${id}?apikey=${key}`;
     const response= await fetch(baseUrl + query);
          const data =await response.json();
     
     return data[0];
}

// getWeather(2175096)
// .then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// Lets join the two method together    
// getCity('lahore')
// .then(data=>{
//     return getWeather(data.Key);
//     //this return as a promise
// }).then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err)

// }) 

// we have to set location dynmically