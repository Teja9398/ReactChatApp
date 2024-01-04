import React, { useState } from 'react'

import search_icon from "./Assets/search.png";
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";
import humidity_icon from "./Assets/humidity.png";

function Weather() {
  let apiKey = "b67b64e491429285ddc8b303f2c8c507";
  
  const [wicon,setIcon] = useState(rain_icon);
  const search = async function(){
   const locationInput = document.getElementById("locationInput");
    if(locationInput.value === "" ){
      alert('check the location input')
      return 0;
    }
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const temperature = document.getElementById("temperature");
    const location = document.getElementById("location");
    const windSpeed = document.getElementById("windSpeed");
    const humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity + "%"
    temperature.innerHTML = Math.round(data.main.temp) + "°c"
    location.innerHTML = data.name;
    windSpeed.innerHTML = Math.round(data.wind.speed) +"kmph"

    
    if(data.weather[0].icon==='02d' && data.weather[0].icon==="02n"){
      setIcon(cloud_icon); 
    }
        else if(data.weather[0].icon==='11d' && data.weather[0].icon==='11n'){
      setIcon(rain_icon);
    }
    else if(data.weather[0].icon==='13d' && data.weather[0].icon==='13n'){
      setIcon(snow_icon);
    }
    else if(data.weather[0].icon==="09d" && data.weather[0].icon==="09n"){
      setIcon(drizzle_icon);
    }
    else if(data.weather[0].icon==="10d" && data.weather[0].icon==="10n"){
      setIcon(rain_icon);
    }
    else{
      setIcon(clear_icon);
    }
    
  }
  return (
    <div className="main flex justify-center items-center mt-20  ">
        <div className="top-bar bg-blue-400 h-[78vh] w-96 rounded-xl">
          <div className= " flex justify-around py-4">
            <input type="text" className = "h-8 w-64 px-8 py-2 rounded-full outline-none text-xl font-extrabold" id="locationInput" placeholder='Search here' />
            <button className="rounded-3xl bg-white p-2"><img src={search_icon} alt="search" onClick={search} /></button>
          </div>
          <div className="image flex flex-col items-center">
            <img id="indicatorLogo" src={wicon} className="m-auto" alt="" />
            <span>
              <h1 id="temperature" className= "font-bold text-white text-5xl">24°C</h1>
              <h2 id="location" className= "font-light text-white text-3xl">London</h2>
            </span>
          </div>
          <div className = "flex justify-around">
          <div className="data flex flex-col w-8  mx-8 mt-14">
              <img src={wind_icon} alt="" /><br />
            <span className='element mt-[-20px]'>
            <h2 id="windSpeed" className= "font-light text-white text-2xl">18kmph</h2>
            <h2 className= "font-light text-white text-lg">WindSpeed</h2>
            </span>
          </div>
          <div className="data flex flex-col w-8  mx-8 mt-14">
              <img src={humidity_icon} alt="" /><br />
            <span className='element mt-[-20px]'>
            <h2 id ="humidity" className= "font-light text-white text-2xl">65%</h2>
            <h2 className= "font-light text-white text-lg">Humidity</h2>
            </span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Weather
