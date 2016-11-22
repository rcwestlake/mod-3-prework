'use strict';

require('es6-promise');
const HTTP = require("q-io/http");


return HTTP.read('http://localhost:7000')
  .then(function(userId) {
    return HTTP.read(`http://localhost:7001/${userId}`)
  }).then(function(response) {
    console.log(JSON.parse(response));
  })
  .then(null, console.error)
  .done();
