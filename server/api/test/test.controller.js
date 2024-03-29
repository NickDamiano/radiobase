'use strict';
var _ = require('lodash');
var Test = require('./test.model');
var Playlist = require('../playlist/playlist.model');
var ObjectId=require('mongodb').ObjectID;

// Get list of tests
exports.index = function(req, res) {
  Test.find(function (err, tests) {
    if(err) { return handleError(res, err); }
    return res.json(200, tests);
  });
};

// Get a single test
exports.show = function(req, res){
  Playlist.find({_id:ObjectId(req.params.id)}, function (err, playlist){
    console.log(req.params.id, "PARAMS");
    if(err) {return handleError(res, err); }
    if(!playlist) { return res.send(404); }
    console.log(playlist);
    console.log('playlist logged above');
    return res.json(playlist);

  })
}

// Creates a new test in the DB.
exports.create = function(req, res) {
  Test.create(req.body, function(err, test) {
    if(err) { return handleError(res, err); }
    return res.json(201, test);
  });
};

// Updates an existing test in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Test.findById(req.params.id, function (err, test) {
    if (err) { return handleError(res, err); }
    if(!test) { return res.send(404); }
    var updated = _.merge(test, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, test);
    });
  });
};

// Deletes a test from the DB.
exports.destroy = function(req, res) {
  Test.findById(req.params.id, function (err, test) {
    if(err) { return handleError(res, err); }
    if(!test) { return res.send(404); }
    test.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}