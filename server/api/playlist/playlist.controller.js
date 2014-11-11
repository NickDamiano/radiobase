'use strict';

var _ = require('lodash');
var Playlist = require('./playlist.model');
var Scraper = require('../../../lib/scraper.js');
var ObjectId=require('mongodb').ObjectID;


// Get list of playlists
exports.index = function(req, res) {
  Playlist.find(function (err, playlists) {
    if(err) { return handleError(res, err); }
    return res.json(200, playlists);
  });
};
//testing with strongerthandirt
exports.getPlaylists = function(req, res) {
  var showName = req.params.showname.replace(/-/g, " ");
  Playlist.find( { "programInformation.programName": showName}).sort({"programInformation.originalAirDate": -1}).exec(function (err, playlists) {
    if(err) { return handleError(res, err); }
    if(!playlists) { return res.send(404); }
    return res.json(playlists);
  })
};

// Station.findById(req.params.id, function (err, station) {
//     if (err) { return handleError(res, err); }
//     if(!station) { return res.send(404); }

// Get a single playlist
// exports.show = function(req, res) {
//   Playlist.findById(req.params.id, function (err, playlist) {
//     if(err) { return handleError(res, err); }
//     if(!playlist) { return res.send(404); }
//     return res.json(playlist);
//   });
// };
//Scrapes a playlist
exports.scrape = function(req, res){
  //pass the show, start date, end date to scrape playlist
  //get params
  var sdate = req.query.sdate;
  var edate = req.query.edate;
  var show  = req.query.show;
  show = show.replace(/-/g, ' ')
  console.log('SHOW IS ', show)
  Playlist.find(function (err, playlists) {
    if(err) { return handleError(res, err); }
    return res.json(200, playlists);
  });
  // Playlist.find(
}
exports.show = function(req, res){
  console.log('FUCKING DO SOMETHING');
  Playlist.find({_id:ObjectId(req.params.id)}, function (err, playlist){
    console.log(req.params.id, "PARAMS");
    if(err) {return handleError(res, err); }
    if(!playlist) { return res.send(404); }
    console.log(playlist);
    console.log('playlist logged above');
    return res.json(playlist);

  })
}
// exports.show = function(req, res){
//   Playlist.find({_id:ObjectId(req.params.id)} , function (err, playlist) {
//     if(err) { return handleError(res, err); }
//     if(!playlist) { return res.send(404); }
//     console.log(playlist);
//     return res.json(playlist);
//   };
// });
//after the above, the playlists would be loaded under buttons by year
//maybe the above call gets the playlist date, show, 

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