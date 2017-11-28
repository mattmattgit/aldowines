const dataFunctions = require('./dataFunctions.js');

let specificCall = ( (specificWine) => {

 return new Promise ( (resolve, reject ) => {

 	let output = `We have a `
 	let data = dataFunctions.fetchData();
	
 	if (data.length > 0) {
 		
 		for (let i = 0; i < data.length; i++) { 
 			if (data[i].name.includes(specificWine) ){
 				var wine = {
 					name: `${data[i].name}`,
 					price: `${data[i].price}`
 				}
 				console.log(data[i].price)
 			}
		};

		output += `${wine.name} for £${wine.price}.`
		resolve(output);
 	} else {
 		debugger;
 		console.log('error')
 		reject('error');
 	}
 });
});

module.exports = {specificCall}
