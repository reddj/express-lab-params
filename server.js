let question = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

app.get('/magic/:question', (request, response) => {
	response.send(`<p>${request.params.question}</p> <p>${question[number(question.length)]}</p>`)

})
let number = function(max){
	return Math.floor(Math.random()*max)
}




app.listen(9000);