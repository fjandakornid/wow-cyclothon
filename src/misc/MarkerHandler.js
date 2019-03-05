import { getMarkerColor } from './markerFunctions'

class MarkerHandler {
  static initMarkers (geoJson, googleMap, map) {
    this.markers = {}
    geoJson.forEach(item => {
      var point = { lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }
      var marker = new googleMap.maps.Marker({
        id: item.properties.markerid,
        position: point,
        title: item.properties.name,
        icon: getMarkerColor(item.properties.hopurclass),
        map: map
      })
      this.markers[item.properties.markerid] = marker
    })
  }

  static updateMarkers (geoJson, googleMap, map) {
    if (this.markers === null) {
      this.initMarkers(geoJson, googleMap, map)
    } else {
      geoJson.forEach(item => {
        var marker = this.markers[item.properties.markerid]
        marker.position(item.geometry.coordinates)
      })
    }
  }

  static bounceMarker (markerId, googleMap) {
    var marker = this.markers[markerId]
    marker.setAnimation(googleMap.maps.Animation.BOUNCE)
    setTimeout(() => {
      marker.setAnimation(null)
    }, 2000)
  }

  static moveToMarker (markerId, map) {
    var marker = this.markers[markerId]
    map.panTo(marker.position)
  }
}

MarkerHandler.markers = null

export default MarkerHandler
