'use strict';

require('es6-promise');

function attachTitle(result) {
  return `DR. ${result}`;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
