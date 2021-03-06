'use strict';
require('es6-promise');

const promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, onReject);
