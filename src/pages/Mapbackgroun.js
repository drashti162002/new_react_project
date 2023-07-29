import React, { useEffect, useRef } from 'react';
import "../css/Mapbackgroun.css";
const position = [50.1959739, 78.02423269999997];

const Mapbackground = () => {
//   const mapContainerRef = useRef(null);
//   let map, latLng, marker;


  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.712776, lng: -74.005974 },
      zoom: 10,
    });
  }, []);

  return <div id="map" style={{ height: '100vh'}}></div>;
};


export default Mapbackground;