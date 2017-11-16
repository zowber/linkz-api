'use strict';

var mongoose = require('mongoose'),
	Link = mongoose.model('Linkz');

exports.list_all_linkz = function(req, res) {
	Link.find({}, function (err, link) {
		if (err)
			res.send(err);
		res.json(link);
	});
};

exports.create_link = function(req, res) {
	var new_link = new Link(req.body);
	new_link.save(function(err, link) {
		if (err)
			res.send(err);
		res.json(link);
	});
};

exports.read_link = function(req, res) {
	Link.findById(req.params.linkId, function(err, link) {
		if (err)
			res.send(err);
		res.json(link);
	});
};

exports.update_link = function(req, res) {
	Link.findOneAndUpdate({ _id: req.params.linkId }, req.body, {new: true}, function(err, link) {
		if (err)
			res.send(err);
		res.json(link);
	});
};

exports.delete_link = function(req, res) {
	Link.remove({
		_id: req.params.linkId
	}, function(err, link) {
		if (err)
			res.send(err);
		res.json({ message: 'Link deleted'});
	});
};