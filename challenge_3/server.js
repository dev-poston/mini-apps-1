const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./database/db.js');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  db.find({formNum: req.body.formNum}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (data.length) {
        db.update(req.body, (err, data) => {
          if (err) {
            res.status(400).send(err);
          } else {
            db.find({formNum: req.body.formNum}, (err, data) => {
              if (err) {
                res.status(400).send(data);
              } else {
                res.status(200).send(data);
              }
            });
          }
        });
      } else {
        db.save(req.body, (err, data) => {
          if (err) {
            res.status(400).send(err);
          } else {
            db.find({formNum: req.body.formNum}, (err, data) => {
              if (err) {
                res.status(400).send(data);
              } else {
                res.status(200).send(data);
              }
            });
          }
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Sever Listening on Port: ${port}`);
});