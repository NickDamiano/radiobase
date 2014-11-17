require('./functions');
var scraperjs = require('scraperjs');
var http = require('http');
var artistCall = require('./echonestArtistCall');
var callbacks = require('./callbacks.js');
var sleep = require('sleep');

date = new Date(2014,2,22);
endDate = new Date(2014,4,4);

function scrapePlaylist () {
    if (date >= endDate) return;
    
    // console.log(date);
    var showDate;
    var day = date.getDate();//returns day number
    var month = date.getMonth();
    var year = date.getFullYear();
    dayString = day.toString();
    yearString = year.toString();
    //convert month num to name
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    monthString = months[month];
    // console.log(monthString);
    var dateConverted = monthString + '-' + dayString + '-' + yearString;
    // console.log("DATE DATE", dateConverted);
    scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-' + dateConverted)
    // scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-october-27-2014')


        .scrape(callbacks.selectSongs, callbacks.createListObj.curry(date))
        .then(function () { sleep.sleep(10) })
        // .then(sleep.sleep.curry(2))
        .then(scrapePlaylist)
    ;

    date = new Date(year,month,day+7);
}

scrapePlaylist();
