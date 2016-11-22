'use strict';

require('es6-promise');
var Q = require('q');

function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(int) {
  console.log(int);
  return int + 1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
