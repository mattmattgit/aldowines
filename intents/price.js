const dataFunctions = require('./dataFunctions.js');

let priceCall = ( (price) => {

 return new Promise ( (resolve, reject ) => {

 	let output = `Here are some of our favourite wines for under ${price}: `
 	let data = dataFunctions.fetchData();
 	let wines = []
	
 	if (data.length > 0) {
  		for (let i = 0; i < data.length; i++) { 
 			if (data[i].price < price ){
 				var wine = {
 					name: `${data[i].name}`,
 					category: `${data[i]}`,
 					price: `${data[i].price}`
 				}
 				wines.push(wine);
 			}
		};

	for (let i = 0; wines.length > i; i++){
		output += `a ${wines[i].name} `
	}

		output += `${wine.name} for £${wine.price}.`
		resolve(output);
 	} else {
 		debugger;
 		console.log('error')
 		reject('error');
 	}
 });
});

module.exports = {priceCall}
