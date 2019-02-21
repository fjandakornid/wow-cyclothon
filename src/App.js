import React, { useRef } from 'react'
import KdTree from 'kd-tree-js'

import { useGoogleMap } from './hooks/useGoogleMap'
import { useMap } from './hooks/useMap'

import route from './data/route.json'
import response from './data/response.json'

const API_KEY = 'AIzaSyDybC5A45G_4GudlnE3Q-wxRIjNPckIxys'

// Iceland: 64.9631° N, 19.0208° W
const initialConfig = {
  zoom: 7,
  center: { lat: 64.9631, lng: -19.0212 }
}

var tree = new KdTree(route, distance, ['Lat', 'Lon'])

// var tree = new KDTree(geoJSON.features.map(function(f) {
//   var ref = f.geometry.coordinates.slice().reverse();
//   f.feature = f;
//   return f;
// }), distance, [0, 1]);

function App () {
  const googleMap = useGoogleMap(API_KEY)
  const mapContainerRef = useRef(null)
  useMap({ googleMap, mapContainerRef, initialConfig })
  console.log(response.length)
  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      ref={mapContainerRef}
    />
  )
}

// function distance(a, b){
//   return map.options.crs.distance(L.latLng(a), L.latLng(b));
// }


const distance = (a, b) => {
  // Could use haversine, but fuck it (https://en.wikipedia.org/wiki/Haversine_formula)
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
}

export default App
