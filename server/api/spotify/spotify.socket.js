/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Spotify = require('./spotify.model');

exports.register = function(socket) {
  Spotify.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Spotify.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('spotify:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('spotify:remove', doc);
}