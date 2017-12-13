'use strict';

const express = require('express');
const app = express();
app.use(express.static('./public'));
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 8007;

app.post('/articles', bodyParser, (request, response) => {
  response.send('Record posted to server!!');
});

app.get('/new' , (req, res) => {
  res.status(200).sendfile('public/new.html');
});

app.use((req, res) => {
  res.status(404).send('Sorry can\'t find that page!');
});

app.get('/bye', (req, res) => {
  res.json('I am a blob of json');
});

app.listen(PORT, () => console.log(`Listening on port: "${PORT}"`));
