import React, { useRef, useEffect, useContext } from 'react'

import { MapContext } from '../../misc/MapContext'

import { useMap } from '../../hooks/useMap'
import { useGoogleMap } from '../../hooks/useGoogleMap'
import MarkerHandler from '../../misc/MarkerHandler'
import WeatherHandler from '../../misc/WeatherHandler'
import { getTree, addNearest } from '../../misc/tree'

import contestantsApi from '../../api/geoJsonApi'
import weatherApi from '../../api/weatherApi'

import mapStyle from '../../data/mapStyle.json'

// Iceland: 64.9631° N, 19.0208° W
const initialConfig = {
  zoom: 7,
  center: { lat: 64.9631, lng: -19.0212 },
  mapTypeId: 'terrain',
  styles: mapStyle
}

function addKmlLayer (googleMap, map) {
  const kml = new googleMap.maps.KmlLayer({
    url: 'https://raw.githubusercontent.com/fjandakornid/wow-cyclothon/master/src/data/WOWCyclothon2018.kml',
    map: map
  })
}

const MapContainer = React.memo(function Mappy (props) {
  const googleMap = useGoogleMap(process.env.REACT_APP_GOOGLE_MAPS_KEY)
  const mapContainerRef = useRef(null)
  const map = useMap({ googleMap, mapContainerRef, initialConfig })
  const { state, dispatch } = useContext(MapContext)
  //const tree = getTree()

  async function updateData () {
    dispatch({ type: 'UPDATE_GOOGLE_MAP', data: googleMap })
    dispatch({ type: 'UPDATE_MAP', data: map })

    const response = await contestantsApi.getGeoJson()
    MarkerHandler.updateMarkers(response, googleMap, map)
    //addNearest(tree, response)
    //dispatch({ type: 'UPDATE_GEO_JSON', data: response })
    
    if (state.showWeatherLayer) {
      let weather = await weatherApi.getObservations()
      WeatherHandler.updateWeather(weather, googleMap, map)
    }
  }

  useEffect(() => {
    if (googleMap !== null && map !== null) {
      addKmlLayer(googleMap, map)
      updateData()
    }
  }, [googleMap, map])

  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      ref={mapContainerRef}
    />
  )
})

export default MapContainer
