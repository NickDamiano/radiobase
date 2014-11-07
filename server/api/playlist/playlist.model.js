'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaylistSchema = new Schema({
        stationInformation: {
            station: String,
            locationCity: String,
            locationState: String,
            locationCountry: String,
            frequency: String,
            stationWebsite: String,
            donationLink: String
        },
        programInformation: {
            programName: String,
            programDay: String,
            programTimeStart: String,
            programTimeEnd: String,
            programWebsite: String,
            programDJs: Array,
            programGenres: Array,
            originalAirDate: Date
        },
        songs: Array
});

module.exports = mongoose.model('Playlist', PlaylistSchema);