var dependency = require('./../lib/dependency.js');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  var number = dependency.getNumber();
  res.send('This is the number from the library folder: ' + number);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
