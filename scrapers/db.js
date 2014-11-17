var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

var url = 'mongodb://localhost:27017/radiobase';
//use connect method to connect to server
var dbConection = undefined;

var connectTest = function(){
	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		console.log("Connected correctly to server");

		db.close();
	});
};

var connectDB = function(callback){
	MongoClient.connect(url, function(err, db){
		// assert.equal(null, err);
		console.log("Connected correctly to server");
		dbConection = db;
		callback();
		// db.close();
	});
};

var closeDB = function(){
	if(dbConection){
		dbConection.close();
		dbConection = undefined;
	}
};



var insertDocuments = function(playlist, callback) {

	connectDB(function(){
		var collection = dbConection.collection('playlists');
		collection.insert([
			playlist
			],
			function(err, result){
				if(callback){
					callback(result);
				}
				closeDB();
			});
	});
};

module.exports = {
	connectTest : connectTest,
	insertDocuments : insertDocuments
};