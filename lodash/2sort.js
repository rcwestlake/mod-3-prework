var _ = require("lodash");

const worker = users => {
  return _.sortBy(users, ['quantity']).reverse();
};

module.exports = worker;
