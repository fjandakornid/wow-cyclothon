import React, { useRef, useEffect } from 'react'

import { useGoogleMap } from './hooks/useGoogleMap'
import { useMap } from './hooks/useMap'

import response from './data/response.json'

const API_KEY = 'AIzaSyDybC5A45G_4GudlnE3Q-wxRIjNPckIxys'

function getColor (group) {
  switch (group) {
    case 'flokkur1':
      return 'red'
    case 'flokkur2':
      return 'blue'
    case 'flokkur3':
      return 'green'
    case 'flokkur4':
      return 'purple'
    default:
      return 'black'
  }
}

function getMarkerColor (group) {
  var color = getColor(group)
  return `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png` 
}

// Iceland: 64.9631° N, 19.0208° W
const initialConfig = {
  zoom: 7,
  center: { lat: 64.9631, lng: -19.0212 }
}

function App () {
  const googleMap = useGoogleMap(API_KEY)
  const mapContainerRef = useRef(null)
  var map = useMap({ googleMap, mapContainerRef, initialConfig })
  
  useEffect(() => {
  if (googleMap !== null && map !== null) {
    response.map(item => {
      var point = {lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0]}
      new googleMap.maps.Marker({
        position: point,
        title: item.properties.name,
        icon: getMarkerColor(item.properties.hopurclass),
        map: map
      })
    })
  }
  }, [googleMap, map])

  console.log('App render')
  return (
    <div>
      {mapContainerRef !== null &&
        <div
        style={{ height: '100vh', width: '100%' }}
        ref={mapContainerRef}
        />
    }
    </div>
  )
}

export default App
