import React, { useState, useEffect } from 'react';

const lat = process.env.REACT_APP_LATITUDE
const lon = process.env.REACT_APP_LONGITUDE
const key = process.env.REACT_APP_API_KEY

const GetWeather = (userLat, userLon) => {

   const [Latitude, setLatitude] = useState(userLat ? userLat : lat)
   const [Longitude, setLongitude] = useState(userLon ? userLon : lon)
   const [dataVar, setDataVar] = useState()
   useEffect(() => {
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${Latitude},${Longitude}&apikey=${key}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            setDataVar(data)
            return(
               dataVar
            )
         })
         .catch((err) => {
            console.log(err.message)
         })
   })

}

export default GetWeather;