import React, { useRef, useEffect, useContext } from 'react'

import { MapContext } from '../../misc/MapContext'

import { useMap } from '../../hooks/useMap'
import { useGoogleMap } from '../../hooks/useGoogleMap'
import { useGoogleMarker } from '../../hooks/useGoogleMarker'

import contestantsApi from '../../api/geoJsonApi'

// Iceland: 64.9631° N, 19.0208° W
const initialConfig = {
  zoom: 7,
  center: { lat: 64.9631, lng: -19.0212 },
  mapTypeId: 'terrain'
}

const MapContainer = React.memo(function Mappy (props) {
  const googleMap = useGoogleMap(process.env.REACT_APP_GOOGLE_MAPS_KEY)
  const mapContainerRef = useRef(null)
  const map = useMap({ googleMap, mapContainerRef, initialConfig })
  const { markers, updateMarkers } = useGoogleMarker()
  const { state, dispatch } = useContext(MapContext)

  async function updateData () {
    const response = await contestantsApi.getGeoJson()
    dispatch({ type: "UPDATE_GEO_JSON", data: response });
    updateMarkers(response, googleMap, map)
    
    //TODO: calculate travelled distance from kd-tree
  }

  useEffect(() => {
    if (googleMap !== null && map !== null) {
      updateData()
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
