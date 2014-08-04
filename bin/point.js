#!/usr/bin/env node
var point =  require('../');
var argv = require('minimist')(process.argv.slice(2));

var x,y;

if(argv.h || argv.help){
  docs();
} 
else {
  if(argv.x){
    x = argv.x;
    y = argv.y;
  } else if(argv.lat){
    x = argv.lon;
    y = argv.lat;
  } else if(argv.latitude){
    x = argv.longitude;
    y = argv.latitude;
  } else if(argv._[0] && argv._[1]){
    x = argv._[0];
    y = argv._[1];
  }

  console.log(JSON.stringify(point(x, y)));
}

function docs(){
  console.log('turf-point\n===\n');
  console.log('-h --help: show docs\n');
  console.log('coordinate inputs:\n')
  console.log('--lat --lon');
  console.log('--latitude --longitude');
  console.log('-x -y');
  console.log('\ndefault: \nturf-point [num1] [num2]\n\n')
}