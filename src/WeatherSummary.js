import React, {useState, useEffect} from 'react'
import { WeatherEntry } from './WeatherEntry';
import { readForecast, readWeather } from './WeatherService';
import './summary.scss'

export const WeatherSummary = ({locationProp}) => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null)

    useEffect(() => {
        (async function () {
          if (locationProp) {
            const [weather, forecast] = await Promise.all([
              readWeather(locationProp.id),
              readForecast(locationProp.id)
            ]);
            setWeather(weather);
            setForecast(forecast);
          }
        })();
      }, [locationProp]);

    if (!locationProp || !weather || !forecast) return null;

    return (
        <div>
            <hr/>
            <h2>{locationProp.name}</h2>
            <WeatherEntry weatherProp={weather}/>

            <h2>Forecast</h2>
            <div>
                <ol style={({whiteSpace: 'nowrap'})}>
                {forecast.map(timePoint =>
                    <li key={timePoint.dt}>
                    <WeatherEntry weatherProp={timePoint}/>
                    </li>
                )}
                </ol>
            </div>
        </div>
    );
}
