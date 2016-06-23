require('babel-core/register');
var port = process.env.PORT || 3000;
var app = require('./server/app');
app.listen(port, function () {
  console.log('Express app listening on port ' + port);
});
