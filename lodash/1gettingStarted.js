var _ = require("lodash");

const worker = users => {
  return _.filter(users, { active: true });
};

module.exports = worker;
