'use strict'

var _ = require("lodash");

const sum = (orders) => {
  let summary = [];
  let grouped = _.groupBy(orders, 'article');

  let users = _.map((grouped), function(value, key) {
    let quantity = _.reduce(_.map(value, 'quantity'), function(sum, n) {
      return sum + n;
    });

    summary.push({ 'article': parseInt(key), 'total_orders': quantity });
  });

  return _.sortBy(summary, 'total_orders').reverse();
}

module.exports = sum;
