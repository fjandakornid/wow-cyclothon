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

export function initMarkersAndAddToMap (geoJson, googleMap, map) {
  var markers = []
  geoJson.map(item => {
    var point = { lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }
    var marker = new googleMap.maps.Marker({
      position: point,
      title: item.properties.name,
      icon: getMarkerColor(item.properties.hopurclass),
      map: map
    })
    markers.push(marker)
  })
  return markers
}

export function moveToMarker (map, marker) {
  map.panTo(marker.position)
}
