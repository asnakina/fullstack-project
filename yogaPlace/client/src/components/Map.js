// + register on GoogleMaps and get API from them and get the keys
// install react-google-maps package
import React from 'react';
import compose  from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerWithLabel } from  with 'react-google-maps';
// import './App.css';

export default(props) => {
  const GoogleMapShow = compose(withScriptjs, withGoogleMap)(props => (
     <GoogleMap
       defaultCenter = {{lat: 25, lng: -80}}
       defaultZoom = {15}
      >
      {props.places.map(place => <Marker key={place.id} title={place.Name} position={{lat:parseFloat(place.lat), lng:parseFloat(place.lng)}} />)}
      // onClick={() => props.onMarkerClick(place)
    </GoogleMap>
  )
 );

 return(
   <div>
      <h1>Click
         <GoogleMapShow Component
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=....."
                        loadingElement={<div style={{height: `100%`}}  /> }
                        containerElement={ <div style={{ height: `30vh`, width: '30vw' }} /> }
                        mapElement={<div style={{height: `30vh`, width: `30vw`}} />}
                        onMarkerClick={props.onMarkerClick}
                        places={props.places}
                    />
      </div>
    )
  }
;
