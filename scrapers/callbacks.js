var artistCall = require('./echonestArtistCall');
var youtubeCall = require('./youtubeApi');
var fs = require('fs');
var db = require('./db.js');
var Q = require('kew');

var createPlaylist = function () {

    return {
        stationInformation: {
            station: 'KOOP',
            locationCity: 'Austin',
            locationState: 'Texas',
            locationCountry: 'USA',
            frequency: '91.7',
            stationWebsite: 'http://www.koop.org/',
            donationLink: 'http://www.koop.org/donate'
        },
        programInformation: {
            programName: 'Stronger Than Dirt',
            programDay: 'Saturday',
            programTimeStart: '8:00PM',
            programTimeEnd: '10:00PM',
            programWebsite: 'http://www.koop.org/programs/stronger-dirt',
            programDJs: ['Scott Gardner'],
            programGenres: ['punk', 'hardcore rock', 'rock'],
            originalAirDate: 0,
            airDateYear: 0,
        },
        songs: []
    };
};


module.exports = {
    selectSongs: function($) {
    //get back all p's within id - content
    console.log("IN SELECT SONGS!!!!");
        return $("#content p").map(function() {
            console.log($(this).text());
            return $(this).text();
        }).get();
        //callback function passes the object of the paragraphs into it
    },
    createListObj: function(date, songs) {
        var songObj;
        console.log('SONGS SONGS',  songs[2]);
        console.log("IN CREATE LIST OBJ!!!");
        var playlist = createPlaylist();
        var i = 0;
        // console.log(songs)
        var promises = [];
        if(songs.length === 0){
            return Q.resolve(null);
        }else if(songs.length === 1){
            var songsArray = songs[0].split('\n');
        }else if(songs.length > 1 && songs.length < 4){
            var songsArray = songs[1].split('\n');
        }else if(songs.length > 3){
            var songsArray = songs.slice(2);
        }

        //loop through song data and create objects for each song
        var counter = 1;
        var year = date.getFullYear();
        playlist.programInformation.originalAirDate = date;
        playlist.programInformation.airDateYear = year;
        console.log('about to start the for loop');

        for(var i = 0;i<songsArray.length;i++){
            splitSong = songsArray[i].split(" - ");
            // console.log("splitsong", splitSong);

            playlist.songs.push({
                artist:     splitSong[0],
                title:      splitSong[1],
                album:      splitSong[2],
                biography:  ""
            });

            songObj = playlist.songs[i];
            promises.push(addBioAndYoutubeId(songObj));
        }

        return Q.all(promises).then(function () {
            db.insertDocuments(playlist, function(result){
                console.log('inserted a playlist');
            });
        })
        .end();
    }
};

var addBioAndYoutubeId = function (songObj) {
    return artistCall.getBio(splitSong[0]).then(function (bio){
        console.log("Got bio:");
        console.log('BIO BIO BIO', bio);
        songObj.biography = bio;
        return songObj;
    })
    // .then(youtubeCall.getYoutubeExtension)
    .then(function (song) {
        return youtubeCall.getYoutubeExtension(song);
    })
    .then(function (youtubeId) {
        console.log('youtubeID', youtubeId);
        songObj.youtubeId = youtubeId;
    });
};

