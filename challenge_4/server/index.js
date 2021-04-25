const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path =  require('path');
const port = 3000;

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
});