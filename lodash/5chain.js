'use strict'

var _ = require("lodash");

const worker = (names) => {
  let newNames = _.chain(names)
    .map((name) => {
       return _.toUpper(name + 'chained')
    })
    .sortBy()
    .value();
  return newNames;
}

module.exports = worker;
