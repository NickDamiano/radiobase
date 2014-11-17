// var helpers = require('./helpers');
// helpers.getJSON
var getJSON = require('./helpers').getJSON;


module.exports = {
	getBio: function(artist){
		artist = artist.replace(/\s/g, '+');
		artist = artist.replace(/&/g, 'and');
		var url = "http://developer.echonest.com/api/v4/artist/biographies?api_key=DRADYOWC7OYHR5XZG&name=" + artist + "&format=json&results=1&start=0&license=cc-by-sa";

		return getJSON(url).then(function (echonestResponse) {

			if(echonestResponse.response.status.code === 0){
				if(echonestResponse.response.biographies.length > 0){
					// callback(echonestResponse.response.biographies[0].text);
					return echonestResponse.response.biographies[0].text;
				}else{
					return "No biography found";
				}
			}else{
				return "No biography found";
			}
		})
	}
};