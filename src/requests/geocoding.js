import React, { useState, useEffect } from 'react';

const key = process.env.REACT_APP_GEOCODING_KEY

export const GetLatAndLong = (zipCode) => {
   useEffect(() => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code=${zipCode}&key=${key}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            return data;
         })
         .catch((err) => {
            console.log(err.message)
         })
   })
}

export const GetZipCode = (lat, long) => {
   useEffect(() => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            return data;
         })
         .catch((err) => {
            console.log(err.message)
         })
   })
}