'use strict'

var _ = require("lodash");

const template = (obj) => {
  let greeting = _.template('Hello <%= name %> (logins: <%= login.length %>)');
  return greeting(obj);
}

module.exports = template;
