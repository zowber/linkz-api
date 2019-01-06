'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
	name: {
		type: String,
		required: 'A name is required'
	},
	url: {
		type: String,
		required: 'A url is required'
	},
	labels: {
		type: [{ id: Number, name: String}]
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Link', LinkSchema);