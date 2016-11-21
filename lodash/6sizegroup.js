'use strict'

var _ = require("lodash");

const worker = (data) => {
  let arr = [];
  let obj = _.groupBy(data, 'username');

  let users = _.map((obj), function(value, key) {
    let comments = _.size(_.map(value, 'comment'));
    arr.push({ 'username': key, 'comment_count': comments });
  });

  return _.sortBy(arr, 'comment_count').reverse();
}

module.exports = worker;
