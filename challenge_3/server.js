const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./database/db.js');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log('SERVER: POST REQ RECEIVED: ', req.body);
  //do stuff with data
  res.status(200).send('Success');
});

app.listen(port, () => {
  console.log(`Sever Listening on Port: ${port}`);
});