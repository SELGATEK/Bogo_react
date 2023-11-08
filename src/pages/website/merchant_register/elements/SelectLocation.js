import React, { useEffect } from 'react'; 


function LocationAutocomplete({setMapdata , setlatitude, setlongitude, longitude}) {
  useEffect(() => {
    const input = document.getElementById('autocomplete');
    if(input){
    const autocomplete = new window.google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const placeId = place.place_id;
        setMapdata(place);
        setlatitude(lat);
        setlongitude(lng);
        console.log('Latitude:', lat);
        console.log('Longitude:', lng);
        console.log('Place ID:', placeId);
      } else {
        console.error('Place ID not found for the entered location.');
      }
    });
  } }, []);

  return (
    <div className='googlePlaceSearch_div' style={{zIndex:' 999' , top: '7px', position: 'absolute', width: '500px'}}>
      <input id="autocomplete" placeholder="Enter a location" type="text" />
    </div>
    
  );
}

export default LocationAutocomplete;
