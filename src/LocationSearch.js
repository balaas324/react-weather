import React, {useState} from "react";

export const LocationSearch = ({onSearchProp}) => {
    const [locationSearch, setLocationSearch] = useState('');
    const disableSearch = locationSearch.trim() === '';

    const addLocation2 = () => {
        onSearchProp(locationSearch);
        setLocationSearch('');
      };

  return (
    <div>
      <label>
        Add Location
        <input className="ml-1 mr-1" type="text" 
               onChange={e => setLocationSearch(e.target.value)} value={locationSearch}/>
      </label>
      <button className="btn btn-primary"
              onClick={addLocation2} disabled={disableSearch}>Search</button>
    </div>
  );
}