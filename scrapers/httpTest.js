var http = require('http');
band = "clutch";

var url = "http://developer.echonest.com/api/v4/artist/biographies?api_key=DRADYOWC7OYHR5XZG&name="+ band + "&format=json&results=1&start=0&license=cc-by-sa"
http.get(url, function(res){
	// console.log("Got response: " + res.statusCode);
	var body = "";

	res.on('data', function(chunk){
		body+= chunk;
	});
	res.on('end', function(){
		var echonestResponse = JSON.parse(body);
		console.log("Got response: ", echonestResponse.response.biographies);
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});