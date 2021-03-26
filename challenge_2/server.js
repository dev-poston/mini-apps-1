const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {reports: null})
});

app.post('/', (req, res) => {
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
  res.status(200);
  res.render('index', {reports: report});
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});