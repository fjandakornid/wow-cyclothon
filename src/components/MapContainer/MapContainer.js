import React, { useRef, useEffect, useContext } from 'react'

import { MapContext } from '../../misc/MapContext'

import { useGoogleMap } from '../../hooks/useGoogleMap'
import { useMap } from '../../hooks/useMap'

import contestantsApi from '../../api/contestantsApi'
import { initMarkersAndAddToMap, moveToMarker } from '../../misc/markerFunctions'

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
  const { state, dispatch } = useContext(MapContext)

  async function initMarkers () {
    const response = await contestantsApi.getGeoJson()
    var markers = initMarkersAndAddToMap(response, googleMap, map)
    moveToMarker(map, markers[0])
  }

  useEffect(() => {
    if (googleMap !== null && map !== null) {
      //TODO: calculate travelled distance from kd-tree
      initMarkers()
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
