var path = require('path');
var express = require('express');

var app = express();
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
app.use('/', express.static('dist'));

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
