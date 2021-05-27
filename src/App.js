import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocationSearch } from './LocationSearch';
import { LocationTable } from './LocationTable';
import { searchLocation } from './WeatherService';
import { WeatherSummary } from './WeatherSummary';


function App() {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let onSearch = async (term) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Weather App</h1>
      
      <LocationSearch onSearchProp={onSearch} />

      {
        error
          ? <div className={`alert alert-danger`}>{error}</div>
          : null
      }
      {
        warning
          ? <div className={`alert alert-warning`}>{warning}</div>
          : null
      }

      <LocationTable 
        locationsProp={locations} 
        currentProp={currentLocation}
        onSelect={location => setCurrentLocation(location)}
      />

      <WeatherSummary locationProp={currentLocation} />
      
    </div>
  );
}

export default App;
