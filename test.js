var test = require('tape');
var point = require('./')

test('point', function(t){
  t.plan(4)

  var pt = point(5, 10, {name: 'test point'})

  t.ok(pt);
  t.equal(pt.geometry.coordinates[0], 5)
  t.equal(pt.geometry.coordinates[1], 10)
  t.equal(pt.properties.name, 'test point')
});