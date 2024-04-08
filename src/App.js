import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import GetWeather from './requests/weather';
import { GetLatAndLong, GetZipCode } from './requests/geocoding';
function App() {
  const [ZipCode, setZipCode] = useState('10001')
  // const [currentLat, setCurrentLat] = 
  // const [currentLon, setCurrentLon] =
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(GetLatAndLong(ZipCode))
    // console.log(data)
  }, [dispatch])

  // let weatherInfo = GetWeather();
  // console.log(weatherInfo)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div id='zip-code centered'>
          <label>
          zip code: 
          <input
          placeholder='enter zip code here'
          type='number'
          value={ZipCode}
          onChange={(e) => setZipCode(e.target.value)}
          />
          
          </label>
        </div>
        <div className='weather-info centered'>

        </div>
      </body>
        <p>Solution should be responsive
          Use the Open Weather API with the default location set to New York, NY, and allow the user to change the location by zip code
          Show the "current" conditions for New York:
          Location (ie. New York, NY, USA)
          Current weather description (ie. sunny)
          Current temperature
          Today's high temperature
          Today's low temperature
          Allow the user to toggle more data in the current conditions area:
          Wind Speed
          Humidity
          Pressure
          Sunrise/Sunset Time
          Show the 7 Day forecast</p>
    </div>
  );
}

export default App;
