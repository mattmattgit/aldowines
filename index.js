let express = require('express');
var bodyParser = require('body-parser')

const typeFile = require('./intents/type.js');
const styleFile = require('./intents/style.js');
const specificFile = require('./intents/specific.js');
const priceFile = require('./intents/price.js')
const dataFunctions = require('./intents/dataFunctions.js')

let app = express();
app.use(bodyParser.json());

// gcloud beta functions deploy aldiWebhook --stage-bucket staging.food-delivery-14fbe.appspot.com --trigger-http

app.post('/index', (req, res) => {

	let intent = req.body.result.metadata['intentName'];
	console.log(`intent: ${intent}`)

	if (intent === 'type') {
		let type = req.body.result.parameters['type'].toLowerCase()
		console.log(`type: ${type}`)

		typeFile.typeCall(type).then( (output) => {
			console.log(output)
			res.setHeader('Content-Type', 'application/json');
			res.send({ "speech": output, "displayText": output});
		}).catch( (e) => {
			console.log(e);
			res.setHeader('Content-Type', 'application/json');
			res.send(e);
		});
	} else if (intent === 'style') {
		let style = req.body.result.parameters['style'].toLowerCase();
		let color = '-';
		if (req.body.result.parameters['color']) {
			color = req.body.result.parameters['color'].toLowerCase();
		} 
		console.log(`type: ${style}`)
		console.log(`color: ${color}`)

		styleFile.styleCall(style, color).then( (output) => {
			console.log(output)
			res.setHeader('Content-Type', 'application/json');
			res.send({ "speech": output, "displayText": output});
		}).catch( (e) => {
			console.log(e);
			res.setHeader('Content-Type', 'application/json');
			res.send(e);
		});
	} else if (intent === 'specificWine') {
		let wine = req.body.result.parameters['wine'].toLowerCase()
		console.log(`wine: ${wine}`)

		specificFile.specificCall(wine).then( (output) => {
			console.log(output)
			res.setHeader('Content-Type', 'application/json');
			res.send({ "speech": output, "displayText": output});
		}).catch( (e) => {
			console.log(e);
			res.setHeader('Content-Type', 'application/json');
			res.send(e);
		});
	} else if (intent === 'price') {
		let price = req.body.result.parameters['price']
		console.log(`wine: ${price}`)

		priceFile.priceCall(price).then( (output) => {
			console.log(output)
			res.setHeader('Content-Type', 'application/json');
			res.send({ "speech": output, "displayText": output});
		}).catch( (e) => {
			console.log(e);
			res.setHeader('Content-Type', 'application/json');
			res.send(e);
		});
	}
});

app.listen(3000, () => {
	console.log('listening 3000')
})


