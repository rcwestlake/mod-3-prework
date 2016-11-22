'use strict';

require('es6-promise');
const HTTP = require("q-io/http");


return HTTP.read('http://localhost:1337')
  .then(function(content) {
      console.log(JSON.parse(content));
})
  .then(null, console.error)
  .done();
