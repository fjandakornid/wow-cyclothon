import KdTree from 'kd-tree-js'

import route from '../data/route.json'

// function distance(a, b){
//   return map.options.crs.distance(L.latLng(a), L.latLng(b));
// }

const distance = (a, b) => {
  // Could use haversine, but fuck it (https://en.wikipedia.org/wiki/Haversine_formula)
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
}

// var tree = new KDTree(geoJSON.features.map(function(f) {
//   var ref = f.geometry.coordinates.slice().reverse();
//   f.feature = f;
//   return f;
// }), distance, [0, 1]);

export const findNearest = (tree, lat, lon) => {
  const nearest = tree.nearest({ Lat: lat, Lon: lon }, 1)
  return nearest
}

const addNearest = (tree, items) => {
  items.forEach((item, i) => {
    const nearest = findNearest(tree, item.geometry.coordinates[1], item.geometry.coordinates[0])
    const next = nearest[0][0]
    item.nearest = next
  })
}

export const getTree = () => {
  return new KdTree(route, distance, ['Lat', 'Lon'])
}
