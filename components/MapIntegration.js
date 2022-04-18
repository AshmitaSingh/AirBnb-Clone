import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from 'geolib';
// import getCenter from 'geolib/es/getCenter';

function MapIntegration({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the searchResults object into the '{ latitude: 52.516272, longitude: 13.377722 }' object
  // Doing it this way so that we can use 'Geolib' library
  const coordinates = searchResults.map(result => ({
    latitude: result.lat,
    longitude: result.long
  }))

  // The Latitude & Longitude of the center of locations coordinates; this return an object with {latitude: , longitude: }
  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  return (
    <ReactMapGL
      {...viewPort}
      mapStyle='mapbox://styles/ashmita-singh/cl24ldq2i000l15tczdo75qkl'
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      {/* Displaying the 'pins(Marker)' on the map */}
      {searchResults?.map(result => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p 
            role='img'
            onClick={() => setSelectedLocation(result)} 
            className='cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'>
              📌</p>
          </Marker>

          {/* A Popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default MapIntegration;