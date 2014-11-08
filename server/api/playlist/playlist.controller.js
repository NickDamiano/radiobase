'use strict';

var _ = require('lodash');
var Playlist = require('./playlist.model');
// require('./scraper.js');

// Get list of playlists
exports.index = function(req, res) {
  console.log("happening???");
  Playlist.find(function (err, playlists) {
    if(err) { return handleError(res, err); }
    return res.json(200, playlists);
  });
};

// Get a single playlist
exports.show = function(req, res) {
  Playlist.findById(req.params.id, function (err, playlist) {
    if(err) { return handleError(res, err); }
    if(!playlist) { return res.send(404); }
    return res.json(playlist);
  });
};
//Scrapes a playlist
exports.scrape = function(req, res){
  //pass the show, start date, end date to scrape playlist
  //get params
  console.log("req")
  console.log(req.query)
  console.log(req.params)
  // console.log("res")
  // console.log(res.params)
  // // scrapePlaylist()
}

// Creates a new playlist in the DB.
exports.create = function(req, res) {
  // console.log("req!!!", req.body);
  var obj = JSON.parse(req.body.data);
  Playlist.create(obj, function(err, playlist) {
    if(err) { return handleError(res, err); }
    return res.json(201, playlist);
  });
};

// Updates an existing playlist in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Playlist.findById(req.params.id, function (err, playlist) {
    if (err) { return handleError(res, err); }
    if(!playlist) { return res.send(404); }
    var updated = _.merge(playlist, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, playlist);
    });
  });
};

// Deletes a playlist from the DB.
exports.destroy = function(req, res) {
  Playlist.findById(req.params.id, function (err, playlist) {
    if(err) { return handleError(res, err); }
    if(!playlist) { return res.send(404); }
    playlist.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}