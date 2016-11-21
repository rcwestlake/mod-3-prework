'use strict'

var _ = require("lodash");

const freelancers = (people) => {
  let average,
    underperform,
    overperform;

  people = _.sortBy(people, 'income');

  let income = _.map(people, 'income');
  let sum = _.reduce(income, function(sum, n) {
    return sum + n;
  });

  average = sum / income.length;
  console.log(average);

  underperform = _.filter(people, function(person) {
    return person.income <= average;
  });

  overperform = _.filter(people, function(person) {
    return person.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
}

module.exports = freelancers;
