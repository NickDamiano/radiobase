require('./functions');
var scraperjs = require('scraperjs');
var http = require('http'); //do i need this?
var artistCall = require('./echonestArtistCall');
var callbacks = require('./callbacks.js');

//converts 10-23-2014 to {month: 9, day:23, year:2014}
// function convertDate(date){
//     console.log("CALLED CONVERT DATE")
//     new_date = {};
//     console.log("DATE", date)
//     splitDate = date.split('-');
//     new_date.month=splitDate[0]-1; //convert because of js date object zero index
//     new_date.day=splitDate[1];
//     new_date.year=splitDate[2];
//     console.log("NEW DATE", new_date)
//     return new_date;
// }

function scrapePlaylist (show,sdate,edate) {
    //date gets passed in as 10-23-2014
    // console.log('here is some shit');
    // console.log(sdate, edate);
    // sdate = convertDate(sdate);
    // edate = convertDate(edate);
    // date = new Date(sdate[year], sdate[month], sdate[day]);
    // date = new Date(2007,9,13);
    // endDate = new Date(2007,9,15);
    // endDate = new Date(edate[year], edate[month], edate[day]);
    date = new Date(2007,9,13);
    // endDate = new Date(2007, 9, 30);

    // while(date <= endDate){
        // console.log("STARTING WHILE LOOP AND DATE IS ", date)
    
        // console.log(date);
        // var showDate;
        // var day = date.getDate();//returns day number
        // var month = date.getMonth();
        // var year = date.getFullYear();
        // dayString = day.toString();
        // yearString = year.toString();
        // //convert month num to name
        // var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        // monthString = months[month];
        // console.log(monthString);
        // var dateConverted = monthString + '-' + dayString + '-' + yearString;

        // scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-' + dateConverted)
        scraperjs.StaticScraper.create('http://www.koop.org/programs/stronger-dirt/blog/playlist-10-13-2007')
            .scrape(callbacks.selectSongs, callbacks.createListObj.curry(date))
            .then(scrapePlaylist)
        ;
        console.log(date);
        // date = new Date(year,month,day+7);
        // console.log("NEW DATE IS", date)
    // }
}

module.exports = {
    scrapePlaylist: scrapePlaylist
    // convertDate: convertDate
};