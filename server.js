
let express = require('express');
let app = express();
let filestream = require('fs');
app.get('/greeting/', (request, response) => {
	response.send('Hello, stranger');
});

app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (request, response) => {
	response.send(
		`${calculateTip(request.params.total, request.params.tipPercentage)}`
)})
function calculateTip(total, tipPercentage){
	return total * (tipPercentage/100)
}

app.listen(9000);