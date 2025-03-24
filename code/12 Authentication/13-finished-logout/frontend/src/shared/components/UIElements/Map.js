import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      mapId: 'place-detail',
      center: center,
      zoom: zoom,
    });

    window.google.maps.importLibrary('marker').then(() => {
      new window.google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: map,
      });
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
