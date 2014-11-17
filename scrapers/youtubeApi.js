var http = require('http');
var getJSON = require('./helpers').getJSON;

module.exports = {
    getYoutubeExtension: function(song){
        console.log('TITLE', song.title, 'ARTIST', song.artist);
        var title = '';
        var artist = '';
        if(song.title){
            title = song.title.replace(/\s/g, '+');
            title = encodeURIComponent(title);
        }
        if(song.artist){
            artist = song.artist.replace(/\s/g, '+');   
            artist =  encodeURIComponent(artist);        
        }
        var url = 'http://gdata.youtube.com/feeds/api/videos?alt=json&q='+ title + '+' + artist;

        return getJSON(url).then(function (youtubeResponse){
            if(youtubeResponse.feed.entry){
                console.log('about to parse youtube response for ', title, artist);
                var youtubeEntry = youtubeResponse.feed.entry[0].id['$t'];
                var youtubeVideoId = youtubeEntry.split('/').reverse()[0];
                console.log(youtubeVideoId);
                return youtubeVideoId;
            }
            else{
                return undefined;
            }
        });
    }
};