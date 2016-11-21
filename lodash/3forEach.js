var _ = require("lodash");

const worker = (cities) => {
   _.forEach(cities, function(city) {
    if(city.population > 1) {
      city.size = 'big'
    } else if(city.population > 0.5) {
      city.size = 'med'
    } else {
      city.size = 'small'
    }
  });
  console.log(cities);
  return cities;
};

module.exports = worker;
