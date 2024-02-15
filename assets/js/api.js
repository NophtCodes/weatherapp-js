'use strict';

const api_key = "d0cea7e3e0ebdcb6e2ec250542f716a1";

/**
 * 
 * @param {string} URL 
 * @param {function} callback 
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data))
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=d0cea7e3e0ebdcb6e2ec250542f716a1`
    },

    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },

    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     * 
     * @param {string} query Search query e.g.: "London", "New York" 
     * @returns 
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&`;
    }
}