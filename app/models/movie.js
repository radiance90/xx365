var mongoose = require('mongoose');

module.exports = mongoose.model('Movie', {
	title : {type : String, default: ''},
	actress : {type : String, default: ''},
	year : {type : Number, default: ''},
	category : {type : String, default: ''},
});
