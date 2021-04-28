import React from "react";
import {getIconUrl} from "./WeatherService";

function convertUnixTimeToDate(unixUtc) {
  return new Date(unixUtc * 1000);
}

export const WeatherEntry = ({weatherProp}) =>
  <div>
    <div>{convertUnixTimeToDate(weatherProp.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{weatherProp.main.temp}°C</strong>
      <div>({weatherProp.main.temp_min}°C / {weatherProp.main.temp_max}°C)</div>
    </div>
    <div>Humidity: {weatherProp.main.humidity}%</div>
    {weatherProp.weather.map(condition =>
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </div>)
    }
  </div>;