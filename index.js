/**
 * Generates a new {@link Point} feature, given coordinates
 * and, optionally, properties.
 *
 * @module turf/point
 * @param {number} longitude - position west to east in decimal degrees
 * @param {number} latitude - position south to north in decimal degrees
 * @param {Object} properties - an optional object that is used as the Feature's
 * properties
 * @return {Point} output
 * @example
 * var pt1 = turf.point(-75.343, 39.984);
 * //=pt1
 */
var isArray = Array.isArray || function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
};
module.exports = function(x, y, properties){
  if(isArray(x)) {
  	properties = y;
  	y = x[1];
  	x = x[0];
  } else if(isNaN(x) || isNaN(y)) throw new Error('Invalid coordinates');
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [x, y]
    },
    properties: properties || {}
  };
};
