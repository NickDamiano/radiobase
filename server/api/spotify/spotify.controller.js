'use strict';

var client_id = '93814aabdcc04644bd8342ca4ad9d329'; // Your client id
var client_secret = 'de5207b42ecc4e2fb7ae09af707b6ab8'; // Your client secret
var redirect_uri = 'http://localhost:8888/api/spotify/callback'; 
var _ = require('lodash');
var querystring = require('querystring');
var Spotify = require('./spotify.model');

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var stateKey = 'spotify_auth_state';


// Get list of spotifys
exports.index = function(req, res) {
  Spotify.find(function (err, spotifys) {
    if(err) { return handleError(res, err); }
    return res.json(200, spotifys);
  });
};

exports.login = function(req, res){
  console.log('log in controller function')
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
  }));
}
// Get a single spotify
exports.show = function(req, res) {
  Spotify.findById(req.params.id, function (err, spotify) {
    if(err) { return handleError(res, err); }
    if(!spotify) { return res.send(404); }
    return res.json(spotify);
  });
};


// Creates a new spotify in the DB.
exports.create = function(req, res) {
  Spotify.create(req.body, function(err, spotify) {
    if(err) { return handleError(res, err); }
    return res.json(201, spotify);
  });
};

// Updates an existing spotify in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Spotify.findById(req.params.id, function (err, spotify) {
    if (err) { return handleError(res, err); }
    if(!spotify) { return res.send(404); }
    var updated = _.merge(spotify, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, spotify);
    });
  });
};

// Deletes a spotify from the DB.
exports.destroy = function(req, res) {
  Spotify.findById(req.params.id, function (err, spotify) {
    if(err) { return handleError(res, err); }
    if(!spotify) { return res.send(404); }
    spotify.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

exports.callback = function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
};
