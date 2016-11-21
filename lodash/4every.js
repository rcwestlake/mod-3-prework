'use strict'

var _ = require("lodash");

const worker = cities => {
  let obj = {
    hot: [],
    warm: [],
  };

  _.forEach(cities, function(city, key) {
    if(_.every(city, function(t) { return t > 19; })) {
      obj.hot = [ key ]
    } else if(_.some(city, function(t) { return t > 19; })) {
      obj.warm.push(key);
    }
  });
  return obj;
};

module.exports = worker;
