const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

app.use(express.static('public/index.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('hi there');
});

app.listen(port, () => {
  console.log(`Sever Listening on Port: ${port}`);
});