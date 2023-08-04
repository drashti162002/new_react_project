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

  return <div id="map" src="https://maps.google.com/maps?width=2048&amp;height=2048&amp;hl=en&amp;q=GEC rajkot&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ height: "100%"}}></div>;
};


export default Mapbackground;

// import React from 'react'

// function InfoWindow() {
//   return (
//     <div>
//         <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="15" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=2048&amp;height=2048&amp;hl=en&amp;q=GEC rajkot&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
//     </div>
//   )
// }

// export default InfoWindow