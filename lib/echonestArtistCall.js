//echonestArtistCall
var http = require('http');

module.exports = {
	getBio: function(artistObj,artist,callback){
		artist = artist.replace(/\s/g, '+');
		var url = "http://developer.echonest.com/api/v4/artist/biographies?api_key=ENV[echonest_key]&name=" + artist + "&format=json&results=1&start=0&license=cc-by-sa";
		http.get(url, function(res){
			var body = "";
			res.on('data', function(chunk){
				body+= chunk;
			});
			res.on('end', function(){
				var echonestResponse = JSON.parse(body);
				// console.log(echonestResponse, "is tHE ECHONEST RESPONSE!!!!!!!!!!!!!!!!")
				if(echonestResponse.response.status.code === 0){
					if(echonestResponse.response.biographies.length > 0){
						// console.log(echonestResponse.response.biographies[0].text);
						// console.log("logged a bio");
						callback(artistObj,echonestResponse.response.biographies[0].text);
					}else{
						callback(artistObj,"No biography found");
					}
				}else{
					callback(artistObj,"No biography found");
				}
				// console.log(echonestResponse.response.biographies[0].text);
				// console.log("Got response: ", echonestResponse.response.biographies);
			});
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	}
};