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

var Curl = require("node-libcurl").Curl

exports.get_page_title = function(req, res) {
  console.log("Getting a page title for " + req.params.url)

  var curl = new Curl()

  curl.setOpt("URL", req.params.url)
  curl.setOpt("FOLLOWLOCATION", true)

  curl.on("end", function(statusCode, body, headers) {
    //console.log("Status: " + statusCode)
    //console.log("Headers: " + Headers)
    console.log(headers)
    var parseTitle = function(body) {
      var regex = new RegExp("<title>(.*?)</title>", "i")
      return body.match(regex)[1]
    }
    res.send(parseTitle(body))
    this.close()
  })

  curl.on("error", curl.close.bind(curl))
  curl.perform()
}
