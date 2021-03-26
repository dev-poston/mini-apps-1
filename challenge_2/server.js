const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('GET REQ MADE');
});

app.post('/upload_json', (req, res) => {
console.log('POST REQ MADE', req.body);
res.status(200).send('we did a thing');
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});