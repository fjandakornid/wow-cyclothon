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

export function getMarkerColor (group) {
  var color = getColor(group)
  return `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`
}

export function convertDirectionToAngle(direction) {
  var directions = [
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
    "NNE",
    "NE",
    "ENE"
  ]
  var index = directions.indexOf(direction)
  return 22.5 * index
}
