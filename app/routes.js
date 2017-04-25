var Movie = require('./models/movie');
var router = require('express').Router();

module.exports = function(app, passport) {
	router.get('/', function(req, res) {
		res.json({message: "Welcome!"});
	});

	app.use('/api', router);

	app.get('*', function(req. res) {
		res.sendfile('./public/views.index.html');
	});
}