'use strict';

require('es6-promise');

const promise = new Promise(function(fufill, reject) {
  fufill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);
