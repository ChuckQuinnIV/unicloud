const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('dist/html'));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.get('/login', function (req, res) {
  res.redirect('login.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});