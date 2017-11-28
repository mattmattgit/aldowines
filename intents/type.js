const _ = require('lodash')

const dataFunctions = require('./dataFunctions.js');

let typeCall = ( (type) => {

 return new Promise ( (resolve, reject ) => {

 	let output = `Here are some of our favorite ${type}s: `
 	let data = dataFunctions.fetchData();
 	let wines = []
 	
 	if (data.length > 0) {
 		console.log(data.length);
 		console.log(data[0].Colour);
 		for (let i = 0; i < data.length; i++) { 			
 			if (data[i].Colour == type && data[i].Rating > 4) {
 				let wine = { 
 					"name": _.startCase(`${data[i].Name}`), 
 					"rating": _.startCase(`${data[i].Rating}`),
 					"price": _.startCase(`${data[i].Price}`)
 				};
 			wines.push(wine);
 			};	
		};
		console.log(JSON.stringify(wines, undefined, 2));

		for (let i = 0; i < 2; i++) {
			output += `${wines[i].name} rated ${wines[i].rating} out of 5 for £${wines[i].price}, `
		};

		output += `and ${wines[3].name} rated ${wines[3].rating} out of 5 for £${wines[3].price}.`
		resolve(output);
 	} else {
 		debugger;
 		console.log('error')
 		reject('error');
 	}
 });
});

module.exports = {typeCall}