// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// const MapWithAutocomplete = () => {
//   const [center, setCenter] = useState({ lat: 0, lng: 0 });
//   const [autocomplete, setAutocomplete] = useState(null);

//   const onLoad = (searchBox) => {
//     setAutocomplete(searchBox);
//   };

//   const onPlacesChanged = () => {
//     if (autocomplete) {
//       const places = autocomplete.getPlaces();
//       if (places.length > 0) {
//         const location = places[0].geometry.location;
//         setCenter({ lat: location.lat(), lng: location.lng() });
//       }
//     }
//   };

//   return (
//     <div style={{width:'500px' , height:'500px'}}>
//     <LoadScript googleMapsApiKey="AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA" libraries={["places"]}>
//       <GoogleMap center={center} zoom={12}>
//         <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
//           {/* <input type="text" placeholder="Search for a location" />
//            */}
//            <GooglePlacesAutocomplete
//               apiKey="AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA"
//             />
//         </StandaloneSearchBox>
//       </GoogleMap>
//     </LoadScript>
//     </div>
//   );
// };

// export default MapWithAutocomplete;




import React from 'react';
import Map from './Map';

export default function BusinessMap({setMapdata , setlatitude, setlongitude,latitude, longitude}) {
  return (
    <>
      <div className="col-md-12 ">
      <div className="Business_Information_map">
        <div className="form-group">
          <i className="fas fa-search search__icon" id="search-icon"></i>
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type your business name"
          />
        </div>
      </div>
      <Map width="100%" setlatitude={setlatitude} setlongitude={setlongitude}  setMapdata={setMapdata} latitude={latitude} longitude={longitude}
        height="450"
        style={{ border: 0 }}/>

      {/*  */}
      

      {/* <div className="connect-g-bussi text-center">
        <div className=" btn btn-primary conn-g-bussi-btn" >
          Connect Google Business Account
        </div>
      </div> */}
    </div>

    </>
  )
}
