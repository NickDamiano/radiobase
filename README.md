RadioBase
=========
Project Overview
-------------
RadioBase is a project which aims to serve as a hub for community run radio stations. 

The first part of the app is the scraper. The scraper grabs the playlists from the stations' websites, the biography of each artist from EchoNest, the YouTube video from YouTube, before finally saving it in the database. 

The second part of the app consists of a front end and backend where the user can select the radio station, then the specific program, and finally a specific playlist. On the last page, the user is able to select the song which then displays the music video and biography. 

##Scraper files

In the root, there's a folder called scrapers. The main recursive method that loops through a date range is in koopScraper.js with separated callbacks in the callbacks.js. Additionally, the echonestArtistcall calls the echonest api for biographies, and the youtubeApi.js does the same for youtube. The helpers.js has the helper for the http.get requests, and functions has the code for my curry function I use to curry the date in the koopScraper.js to the callbacks. Finally db.js has the methods used to save the playlist object into the mongodb. 

##RadioBase main files

Client contains the index.html, and within app, the different folders for the different views. Each folder contains files for css, javascript, controller, and partial html. 

In the root again, Server folder contains the endpoints for the api for playlist, spotify(in progress), and stations. These serve as the link between the client side and the database. Each endpoint folder contains an index.js with routes, a controller, and a mongoose model. 

