import { useState } from 'react'

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

function initMarkersAndAddToMap (geoJson, googleMap, map) {
  var markers = geoJson.map(item => {
    var point = { lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }
    var marker = new googleMap.maps.Marker({
      position: point,
      title: item.properties.name,
      icon: getMarkerColor(item.properties.hopurclass),
      map: map
    })
    return marker
  })
  return markers
}

function moveToMarker (map, marker) {
  map.panTo(marker.position)
}


// async function initMarkers () {
//   const response = await contestantsApi.getGeoJson()
//   var markers = initMarkersAndAddToMap(response, googleMap, map)
// }

export const useGoogleMarker = () => {
  const [markers, setMarkers] = useState([])
  const updateMarkers = (geoJson, googleMap, map) => {
    if (markers.length === 0) {
      setMarkers(initMarkersAndAddToMap(geoJson, googleMap, map))
    }
  }
  return {markers, updateMarkers}
}
