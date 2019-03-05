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
  return `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`
}
