const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./database/db.js');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Sever Listening on Port: ${port}`);
});