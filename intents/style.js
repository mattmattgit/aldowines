const _ = require('lodash')

const dataFunctions = require('./dataFunctions.js');

let styleCall = ( (style, color) => {

 return new Promise ( (resolve, reject ) => {
 	let output = '';
 	console.log(color.length)
 	if (color.length > 1) {
 		output = `Here are some of our favorite ${style} ${color} wines: ` 
 	} else { 
 		output = `Here are some of our favorite ${style} wines: `
 		console.log(output)
 	}	
 	
 	let data = dataFunctions.fetchData();
 	let wines = [];
	
 	if (data.length > 0) {
 		for (let i = 0; i < data.length; i++) { 
 			dataString = JSON.stringify(data[i].additionalInfo)
 			if (dataString.toLowerCase().includes(style) && data[i].colour.toLowerCase().includes(color)){
 				var wine = {
 					name: _.startCase(`${data[i].name}`),
 					price: _.startCase(`${data[i].price}`)
 				}
 				console.log(data[i].name)
 				wines.push(wine)
 			}
		};

		console.log(JSON.stringify(wines, undefined, 2));

		for (let i = 0; i < 2; i++) {
			output += `${wines[i].name} for £${wines[i].price}, `
		};

		output += `and a ${_.startCase(wines[3].name)} for £${_.startCase(wines[3].price)}.`
		resolve(output);
 	} else {
 		debugger;
 		console.log('error')
 		reject('error');
 	}
 });
});

module.exports = {styleCall}
