const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, './public/index.html')))

app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('hi there');
});

app.listen(port, () => {
  console.log(`Sever Listening on '${port}'`);
})

