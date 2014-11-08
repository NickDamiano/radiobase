require('./functions');
var scraperjs = require('scraperjs');
var http = require('http');
var artistCall = require('./echonestArtistCall');
var callbacks = require('./callbacks.js');

//converts 10-23-2014 to {month: 9, day:23, year:2014}
function convertDate(date){
    date = {};
    splitDate = date.split('-');
    date[month]=splitDate[0]-1; //convert because of js date object zero index
    date[day]=splitDate[1];
    date[year]=splitDate[2];
    return date;
}

function scrapePlaylist (show,sdate,edate) {
    //date gets passed in as 10-23-2014
    sdate = convertDate(sdate);
    edate = convertDate(edate);
    date = new Date(sdate[year], sdate[month], sdate[day]);
    // date = new Date(2007,9,13);
    // endDate = new Date(2007,9,15);
    endDate = new Date(edate[year], edate[month], edate[day]);

    if (date >= endDate) return;
    
    console.log(date);
    var showDate;
    var day = date.getDate();//returns day number
    var month = date.getMonth();
    var year = date.getFullYear();
    dayString = day.toString();
    yearString = year.toString();
    //convert month num to name
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    monthString = months[month];
    console.log(monthString);
    var dateConverted = monthString + '-' + dayString + '-' + yearString;

    scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-' + dateConverted)
        .scrape(callbacks.selectSongs, callbacks.createListObj.curry(date))
        .then(scrapePlaylist)
    ;
        
    date = new Date(year,month,day+7);
}

scrapePlaylist();
