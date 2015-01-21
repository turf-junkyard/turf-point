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
 * var pt1 = turf.point([-75.343, 39.984]);
 * //=pt1
 */
var isArray = Array.isArray || function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
};
module.exports = function(coordinates, properties) {
  if (!isArray(coordinates)) throw new Error('Coordinates must be an array');
  if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: coordinates
    },
    properties: properties || {}
  };
};
