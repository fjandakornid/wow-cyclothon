import weatherStations from '../data/weatherStations.json'
import { convertDirectionToAngle } from './markerFunctions'

class WeatherHandler {
  static initWeatherStations (googleMap, map) {
    this.markers = {}
    var infowindow = new googleMap.maps.InfoWindow({
      content: 'test'
    })
    weatherStations.forEach(item => {
      var point = { lat: parseFloat(item.lat), lng: parseFloat(item.lng) }
      var marker = new googleMap.maps.Marker({
        id: item.id,
        position: point,
        title: item.name,
        map: map
      })
      marker.addListener('click', () => {
        console.log('marker click')
        var content =
          `<div class="title">${marker.data.name}</div>
          <div>Hitastig: <span class="value">${marker.data.T}°</span></div>
          <div>Vindhraði: <span class="value">${marker.data.F} m/s</span></div>
          <div>Mesti vindhraði: <span class="value">${marker.data.FX} m/s</span></div>
          <div>Mesta vindhviða: <span class="value">${marker.data.FG} m/s</span></div>
          <div>Vindstefna: <span class="value">${marker.data.D}</span></div>`
        infowindow.setContent(content)
        infowindow.open(map, marker)
      })
      this.markers[item.id] = marker
    })
  }

  static updateWeather (weather, googleMap, map) {
    if (this.markers === null) {
      this.initWeatherStations(googleMap, map)
      this.updateMarkerData(weather, googleMap)
    } else {
      this.updateMarkerData(weather, googleMap)
    }
  }

  static updateMarkerData (weather, googleMap) {
    console.log('updateMarkerData')
    weather.forEach(item => {
      var marker = this.markers[item.id]
      marker.data = item

      var template = [
        '<?xml version="1.0"?>',
          '<svg class="weathermarker" width="80px" height="60px" viewBox="0 0 80 60" version="1.1" xmlns="http://www.w3.org/2000/svg">',
            '<defs>',
              '<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">',
                '<path d="M0,1 L0,5 L6,3 z" fill="#000" />',
              '</marker>',
            '</defs>',
            '<rect x="0" y="0" width="80" height="60" rx="10" ry="10" fill="white" stroke="#000" opacity="0.6"/>',
            '<text x="15" y="25" font-size="24" font-weight="600" fill="{{ tempColor }}">{{ temp }}°</text>',
            '<text x="15" y="50" font-size="24" font-weight="600" fill="black">{{ wind }}</text>',
   
            '<line x1="40" y1="40" x2="46" y2="40" stroke="#000" stroke-width="2.5" marker-end="url(#arrow)" transform="rotate({{ direction }} 48 42)"/>',
          '</svg>'
        ].join('\n')
      var svg = template.replace('{{ tempColor }}', item.T > 0 ? '#D00' : '#00F')
                .replace('{{ temp }}', item.T.replace('.', ','))
                .replace('{{ wind }}', item.F)
                .replace('{{ direction }}', convertDirectionToAngle(item.D))

      marker.setIcon({ url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg) })
      marker.setZIndex(googleMap.maps.Marker.MAX_ZINDEX + 1)
    })
  }
}

WeatherHandler.markers = null

export default WeatherHandler
