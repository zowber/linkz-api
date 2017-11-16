'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkzSchema = new Schema({
	name: {
		type: String,
		required: 'A name is required'
	},
	url: {
		type: String,
		required: 'A url is required'
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Linkz', LinkzSchema);