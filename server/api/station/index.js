'use strict';

var express = require('express');
var controller = require('./station.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:stationname/shows', controller.radioShows);
//this would be api/station/koop/shows - not yet implemented. Should work if I bring in a different station. 
// router.get('/:stationname/shows/:showname', controller.getPlaylists)
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;