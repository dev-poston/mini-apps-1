const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', './client');
app.set('view engine', 'ejs')

app.post('/upload_json', (req, res) => {
  console.log('POST REQ MADE');
  let parse = JSON.parse(req.body.text);

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
  console.log(report);
  res.render('indexTest', {
    reports: report
  });
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});