'use strict';

var express = require('express');
var controller = require('./playlist.controller');

var router = express.Router();

router.get('/scrape', controller.scrape);
//getPlaylists is getting called on the second page for some reason
router.get('/:showname', controller.getPlaylists)

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;