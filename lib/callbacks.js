var artistCall = require('./echonestArtistCall');
var fs = require('fs');
var db = require('./db.js');

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
            originalAirDate: 0
        },
        songs: []
    };
};


module.exports = {
    selectSongs: function($) {
    //get back all p's within id - content
        return $("#content p").map(function() {
            return $(this).text();
        }).get();
        //callback function passes the object of the paragraphs into it
    },
    // callbacks.createListObj.curry(date)
    createListObj: function(date, songs) {
        var playlist = createPlaylist();
        var i = 0;
        if(songs.length > 0){
            var songsArray = songs[0].split('\n');

            //loop through song data and create objects for each song
            for(var i = 0;i<songsArray.length;i++){
                splitSong = songsArray[i].split(" - ");
                // playlist.songs[i] = {
                playlist.songs.push({
                    artist:     splitSong[0],
                    title:      splitSong[1],
                    album:      splitSong[2],
                    biography:  ""
                });
                playlist.programInformation.originalAirDate = date;

                var counter = 1;
                artistCall.getBio(playlist.songs[i], splitSong[0], function(artistObj,bio){
                    bio = bio.replace(/\\'/g, "'"); //this isn't working but does it matter for when it's put onto a web page? developers tools seem to strip it? 
                    artistObj.biography = bio;
                    // console.log(counter);
                    // console.log(songsArray.length)
                    counter++;
                    if(counter === songsArray.length){
                        // fs.appendFile('playlist.json', JSON.stringify(playlist, null, 4), function(err){
                        //     console.log('File written');
                        // });

                        // saveMongo();
                        //write the date of the list and other info to a file
                        //
                        console.log(playlist);
                        db.connectTest();
                        db.insertDocuments(playlist, function(result){
                            console.log(result);
                            console.log('inserted a playlist');
                        })
                    }
     
                });
                
            }//closes for loop for songs array
        }
    }
};

