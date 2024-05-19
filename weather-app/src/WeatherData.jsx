import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
const WeatherApp = () => {
 const [weather, setWeather] = useState({});
 const [location, setLocation] = useState('');

 useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    });
 }, []);

 const fetchWeather = async (lat, lon) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=30c4a448b7f41d650026b05f4ddf15b4&units=metric`);
    setWeather(response.data);
 };

 const handleSearch = async (e) => {
    e.preventDefault();
    try{
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=30c4a448b7f41d650026b05f4ddf15b4&units=metric`);
    setWeather(response.data);}
    catch(er){
        alert("Doszło do błedu spróbuj ponownie pózniej");
    }
 };

 return (
    <div className="App">
      <form onSubmit={handleSearch} className="flex flex-col items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Wprowadź nazwę miasta"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full max-w-xs"
        />
        
        <button type="submit" className="mt-3 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Szukaj
        </button>
      </form>
      {weather.main && (
        <div className="mt-10">
          <h1 className="text-2xl font-bold">{weather.name}</h1>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Wilgotność: {weather.main.humidity}%</p>
          <p>Ciśnienie: {weather.main.pressure} hPa</p>
          <p>Opis: {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Ikona pogody" className="w-16 h-16 mt-4" />
        </div>
      )}
    </div>
 );
};

export default WeatherApp;