'use strict';

require('es6-promise');


new Promise(function(fulfill, reject) {
  setTimeout(function () {
    fulfill('YAY!');
  }, 200);
}).then(console.log).catch(function(err) {
  console.error('ERROR!!!');
  console.error(err.message);
});

const promiseTwo = Promise.resolve('RESOLVE VALUE');

promiseTwo.then(console.log);

const promiseThree = Promise.reject(new Error('REJECT VALUE'));

promiseThree.then(console.log);
