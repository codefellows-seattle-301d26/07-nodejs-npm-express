'use strict';
// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
console.log('Fuck off');

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 8007;
app.use(express.static('./public'))
//

// 

app.get('/public/new', (req, res) => { // GET new article '/public/new/'
  res.status(200).send('You made an ajax request!')
})

app.post('/articles', bodyParser, function(request, response) {
    // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
    console.log(request.body);
    response.send('Record posted to server!!');
  })

// app.get('/bye', (req, res) => {
//   res.json('I am a blob of json')
// })
// app.post()
// app.put()
// app.delete()

app.listen(PORT, () => console.log(`Listening on port: "${PORT}"`))
console.log('live server check', PORT);