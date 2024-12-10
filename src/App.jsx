import React, { useState } from "react";

function WeatherDashboard() {
  const [curCity,setCurCity] = useState(null);
  const [keyword, setKeyword] = useState();
  const [preSearches, setPreSearches] = useState([]);
  const [test,setTest] = useState();
  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    'London': {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

const searchCity = (val='') => {
  let cityData = {};
  let search = '';
  if(val){
    //setTest(val);
    cityData = mockWeatherData[val];
    search = val;
  } else {
    //setTest(keyword);
    cityData = mockWeatherData[keyword];
    search = keyword
  }
  
  
  
  
  if(cityData){
    setCurCity(cityData);
    if (!preSearches.includes(search)) {
      setPreSearches((prevItems) => [...prevItems, search])
    }
  } else {
    setCurCity(null);
  }
}

const reSearch = (val) => {
  setKeyword(val);
  searchCity(val);
}

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." onChange={(e) => setKeyword(e.target.value)} value={keyword}  />
      <button id="searchButton" onClick={() => searchCity(keyword)} >Search</button>
      {curCity &&
        <div id="weatherData">
          <div>Temperature: {curCity.temperature}</div>
          <div>Humidity: {curCity.humidity}</div>
          <div>Wind Speed: {curCity.windSpeed}</div>
          
          
        </div>
      } 
      {curCity == null &&
            <div>City not found.</div>
      }
      <div id="previousSearches">
      {preSearches.map((item, index) => (
          <button key={index} onClick={() => reSearch(item)}>
            {item}
          </button>
        ))}
      </div>
      {test && <div>{test}</div> }
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
