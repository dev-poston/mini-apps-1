const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer  = require('multer')
const upload = multer();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/', upload.any(), (req, res) => {
  let fileName = req.files[0].originalname.slice(0, -4);
  let buf = req.files[0].buffer.toString();
  let parse = JSON.parse(buf);

//Stringifying the JSON object into CSV format
  let parseBody = (req) => {
    let csvReport = '';
    for (let key in req) {
      if (key !== 'children') {
        csvReport += (key + ',');
      }
    }
    csvReport = csvReport.slice(0, -1) + '\n';
    let bodySearch = (body) => {
      if (!body.children) {
        return;
      }
      for (let val in body) {
        if (val !== 'children') {
          csvReport += (body[val] + ',');
        } else {
          if (val) {
            for (let i = 0; i < body[val].length; i++) {
              csvReport = csvReport.slice(0, -1) + '\n';
              bodySearch(body[val][i])
            }
          }
        }
      }
      csvReport = csvReport.slice(0, -1) + '\n';
    }
    bodySearch(req);
    return csvReport;
  }
  let report = parseBody(parse);

//Writing the file & sending back the CSV formatted string to render on the DOM
  fs.writeFile(`./client/${fileName}` + 'csv', `${report}`, 'utf8', (err) => {
    if (err) {
      res.status(400).send('ERROR @ WRITEFILE: ', err);
    } else {
      console.log('SUCCESS @ POST WRITEFILE!');
      res.status(200).send(report);
      }
  });
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});