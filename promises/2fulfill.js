require('es6-promise');
'use strict';

const promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);
