'use strict';
require('es6-promise');

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    let counter = 0;
    let output = [];

    promise1.then(function(value) {
      output[0] = value;
      counter++;

      if(counter >= 2) {
        fulfill(output);
      }
    })

    promise2.then(function(value) {
      output[1] = value;
      counter++;

      if(counter >= 2) {
        fulfill(output);
      }
    })
  })
}

all(getPromise1(), getPromise2())
  .then(function(values) {
    console.log([values[0], values[1]]);
})
