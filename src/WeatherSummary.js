import React, {useState, useEffect} from 'react'
import { WeatherEntry } from './WeatherEntry';
import { readWeather } from './WeatherService';

export const WeatherSummary = ({locationProp}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (locationProp) {
            readWeather(locationProp.id).then(weather => setWeather(weather));
        }
    }, [locationProp]);

    if (!locationProp || !weather) return null;

    return (
        <div>
            <hr/>
            <h2>{locationProp.name}</h2>
            <WeatherEntry weatherProp={weather}/>
        </div>
    );
}
