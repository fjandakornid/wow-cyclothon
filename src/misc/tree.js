import KdTree from 'kd-tree-js'

import route from './data/route.json'

var tree = new KdTree(route, distance, ['Lat', 'Lon'])

// var tree = new KDTree(geoJSON.features.map(function(f) {
//   var ref = f.geometry.coordinates.slice().reverse();
//   f.feature = f;
//   return f;
// }), distance, [0, 1]);

// function distance(a, b){
//   return map.options.crs.distance(L.latLng(a), L.latLng(b));
// }

const distance = (a, b) => {
  // Could use haversine, but fuck it (https://en.wikipedia.org/wiki/Haversine_formula)
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
}