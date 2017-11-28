const fs = require('fs');

exports.fetchData =  () => {
  try {
    var data = fs.readFileSync('data/wines.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

