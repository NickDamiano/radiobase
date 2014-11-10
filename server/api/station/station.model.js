'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StationSchema = new Schema({
  name: String,
  info: {
            station: String,
            locationCity: String,
            locationState: String,
            locationCountry: String,
            frequency: String,
            stationWebsite: String,
            donationLink: String
        },
   shows: Array,
  active: Boolean
});

module.exports = mongoose.model('Station', StationSchema);