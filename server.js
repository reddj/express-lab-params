
let express = require('express');
let app = express();
let filestream = require('fs');
app.get('/greeting/', (request, response) => {
	response.send('Hello, stranger');
});

app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}`);
});

app.listen(9000);