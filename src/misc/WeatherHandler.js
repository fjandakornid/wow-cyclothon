import weatherStations from '../data/weatherStations.json'

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
        //icon: 'https://maps.google.com/mapfiles/ms/icons/black-dot.png',
        map: map
      })
      marker.addListener('click', () => {
        console.log('marker click')
        var content = `<div>Hitastig: ${marker.data.T}</div>` 
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
            '<svg width="26px" height="26px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">',
                '<text x="0" y="15" fill="{{ color }}">ABC</text>',
            '</svg>'
        ].join('\n');
      var svg = template.replace('{{ color }}', '#800');
      
      marker.setIcon = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), scaledSize: new googleMap.maps.Size(20, 20) }
    })
  }
}

WeatherHandler.markers = null

export default WeatherHandler
