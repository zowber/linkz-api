"use strict"

var mongoose = require("mongoose"),
  Link = mongoose.model("Link")

exports.list_all_linkz = function(req, res) {
  console.log("Getting all links")
  Link.find({}, function(err, link) {
    if (err) res.send(err)
    res.json(link)
  })
}

exports.create_link = function(req, res) {
  console.log("Creating a new link")
  var new_link = new Link(req.body)
  new_link.save(function(err, link) {
    if (err) res.send(err)
    res.json(link)
  })
}

exports.read_link = function(req, res) {
  console.log("Getting " + req.params.linkId)
  Link.findById(req.params.linkId, function(err, link) {
    if (err) res.send(err)
    res.json(link)
  })
}

exports.update_link = function(req, res) {
  console.log("Updating" + req.params.linkId)
  Link.findOneAndUpdate(
    { _id: req.params.linkId },
    req.body,
    { new: true },
    function(err, link) {
      if (err) res.send(err)
      res.json(link)
    }
  )
}

exports.delete_link = function(req, res) {
  console.log("Deleting" + req.params.linkId)
  Link.remove(
    {
      _id: req.params.linkId
    },
    function(err, link) {
      if (err) res.send(err)
      Link.find({}, function(err, link) {
        if (err) res.send(err)
        res.json(link)
      })
    }
  )
}

exports.get_linkz_by_label = function(req, res) {
  console.log("Getting linkz by label " + req.params.name)
  Link.find({ "labels.name": req.params.name }, function(err, link) {
    if (err) res.send(err)
    res.json(link)
  })
}
