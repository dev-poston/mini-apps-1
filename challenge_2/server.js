const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
var multer  = require('multer')
var upload = multer();

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //{extended: false} or true???
app.use(cors());
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {reports: null})
});

app.post('/', upload.any(), (req, res) => {
  console.log('POST REQ MADE', req.files);

  let buf = req.files[0].buffer.toString();
  // console.log(buf.toString());
  // let parse = JSON.parse(req.body);

  // let parseBody = (req) => {
  //   let csvReport = '';
  //   for (let key in req) {
  //     if (key !== 'children') {
  //       csvReport += (key + ',');
  //     }
  //   }
  //   csvReport = csvReport.slice(0, -1) + '\n';
  //   let bodySearch = (body) => {
  //     if (!body.children) {
  //       return;
  //     }
  //     for (let val in body) {
  //       if (val !== 'children') {
  //         csvReport += (body[val] + ',');
  //       } else {
  //         if (val) {
  //           for (let i = 0; i < body[val].length; i++) {
  //             csvReport = csvReport.slice(0, -1) + '\n';
  //             bodySearch(body[val][i])
  //           }
  //         }
  //       }
  //     }
  //     csvReport = csvReport.slice(0, -1) + '\n';
  //   }
  //   bodySearch(req);
  //   return csvReport;
  // }
  // let report = parseBody(req.body);

  fs.writeFile(`${req.files[0].originalname}`, `${buf}`, 'utf8', (err) => {
    if (err) {
        console.log('Error!');
        throw err;
    } else {
        console.log('Saved!');
      }
    });
    // fs.readFile(path.join(__dirname, `${req.body.file}`), 'utf8', (err, data) => {
    //     if ( err ) {
    //         console.log( 'error', err );
    //     } else {
    //         console.log('file read');
    //         console.log(data);
    //     }
    // });

  // console.log(report);
  // res.status(200);
  // res.render('index', {reports: report});
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});