const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer  = require('multer')
const upload = multer();

app.use(express.static('index'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.set('views', './views');
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', upload.any(), (req, res) => {
  console.log('POST REQ MADE: ', req);
  let fileName = req.files[0].originalname.slice(0, -4);
  let buf = req.files[0].buffer.toString();
  let parse = JSON.parse(buf);

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

  fs.writeFile(`${fileName}` + 'csv', `${report}`, 'utf8', (err) => {
    if (err) {
      res.status(400).send('File Upload Failed: ', err);
    } else {
      console.log('SUCCESS @ POST WRITEFILE!');
      res.status(200).send(report);
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
});

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});