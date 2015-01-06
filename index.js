/**
 * Generates a new GeoJSON Point feature, given coordinates
 * and, optionally, properties.
 *
 * @module turf/point
 * @param {number} longitude - position west to east in decimal degrees
 * @param {number} latitude - position south to north in decimal degrees
 * @param {Object} properties
 * @return {GeoJSONPoint} output
 * @example
 * var pt1 = turf.point(-75.343, 39.984)
 */
module.exports = function(x, y, properties){
  if(x instanceof Array) {
  	properties = y;
  	y = x[1];
  	x = x[0];
  } else if(isNaN(x) || isNaN(y)) throw new Error('Invalid coordinates')
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [x, y]
    },
    properties: properties || {}
  };
}
