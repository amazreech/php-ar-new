var dependency = require('./../lib/dependency.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('[SECOND APP] This is the number from the library folder: ' + number);
});

app.listen(port, () => {
  console.log(`Second app listening at http://localhost:${port}`);
});
