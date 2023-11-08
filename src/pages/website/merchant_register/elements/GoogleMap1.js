import React, { useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const MapWithAutocomplete = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (searchBox) => {
    setAutocomplete(searchBox);
  };

  const onPlacesChanged = () => {
    if (autocomplete) {
      const places = autocomplete.getPlaces();
      if (places.length > 0) {
        const location = places[0].geometry.location;
        setCenter({ lat: location.lat(), lng: location.lng() });
      }
    }
  };

  return (
    <div style={{width:'500px' , height:'500px'}}>
    <LoadScript googleMapsApiKey="AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA" libraries={["places"]}>
      <GoogleMap center={center} zoom={12}>
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input type="text" placeholder="Search for a location" />
        </StandaloneSearchBox>
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default MapWithAutocomplete;
