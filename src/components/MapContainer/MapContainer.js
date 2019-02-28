import React, { useRef, useEffect } from 'react'

import { useGoogleMap } from '../../hooks/useGoogleMap'
import { useMap } from '../../hooks/useMap'

// import { initMarkersAndAddToMap } from '../../misc/markerFunctions'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

// Iceland: 64.9631° N, 19.0208° W
const initialConfig = {
  zoom: 7,
  center: { lat: 64.9631, lng: -19.0212 },
  mapTypeId: 'terrain'
}

const MapContainer = React.memo(function Mappy (props) {
  const googleMap = useGoogleMap(API_KEY)
  const mapContainerRef = useRef(null)
  var map = useMap({ googleMap, mapContainerRef, initialConfig })

  useEffect(() => {
    if (googleMap !== null && map !== null) {
      //TODO: get geoJson from api
      //TODO: calculate travelled distance from kd-tree
      //var markers = initMarkersAndAddToMap()
    }
  }, [googleMap, map])

  console.log('App render')
  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      ref={mapContainerRef}
    />
  )
})

export default MapContainer
