var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Link = require('./api/models/linkModel');
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://linkz:139913@cluster0-yd9hy.mongodb.net/linkz?retryWrites=true');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routes = require('./api/routes/linkzRoutes');
routes(app);

app.listen(port);

console.log('linkz API server started on port ' + port);

