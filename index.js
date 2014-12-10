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
