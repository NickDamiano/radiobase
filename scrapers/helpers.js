var http = require('http');
var Q = require('kew');

exports.getJSON = function (url) {
	
	var deferred = Q.defer();
	
	http.get(url, function(res){

		var body = "";
		
		res.on('data', function(chunk){
			body += chunk;
		});
		
		res.on('end', function(){
			try {
				var result = JSON.parse(body);
				deferred.resolve(result);
			} catch (e) {
				console.log("Failed to parse", url, body);
				deferred.reject(new Error(e.message));
			}
		});
		
		res.on('error', function(e) {
			console.log("Got error: " + e.message);
			deferred.reject(new Error(e.message));
		});
	});

	return deferred.promise;
};

// getJSON("/some/url").then(function (data) {
// 	console.log("Got data:", data);
// })
