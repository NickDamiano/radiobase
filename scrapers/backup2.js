var scraperjs = require('scraperjs');
var http = require('http');
var artistCall = require('./echonestArtistCall');
var callbacks = require('./callbacks.js');

// date = new Date(2007,9,13);
// endDate = new Date(2007,9,30);
// while(date < endDate){
// 	var day = date.getDate();//returns day number
// 	var month = date.getMonth();
// 	var year = date.getFullYear();
// 	dayString = day.toString();
// 	yearString = year.toString();
// 	//convert month num to name
// 	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// 	monthString = months[month];
// 	console.log(monthString);
// 	var dateConverted = monthString + '-' + dayString + '-' + yearString;

	scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-' + "october-13-2007")
    .scrape(callbacks.selectSongs, callbacks.createListObj);
	
// 	date = new Date(year,month,day+7);
// }