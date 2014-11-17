var db = require('./db.js');

var station = {
    "name": "koop",
    "info": {
        "station": "KOOP",
        "locationCity": "Austin",
        "locationState": "Texas",
        "locationCountry": "USA",
        "frequency": "91.7",
        "stationWebsite": "http://www.koop.org/",
        "donationLink": "http://www.koop.org/donate"
    },
    "shows": [
    {
        "programInformation": {
        "programName": "Adventures in Sound",
        "programDay": "Saturday",
        "programTimeStart": "1:00PM",
        "programTimeEnd": "2:00PM",
        "programWebsite": "http://www.koop.org/programs/adventures-sound",
        "programThumbnail": "https://scontent-a-pao.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/954717_682820365165083_3393492408997686170_n.jpg?oh=5fd95b288516dab29b7402706f148c27&oe=54DDF1C8",

        "programDJs": [
            "Dennis Campa"
        ],
        "programGenres": [
            "eclectic"
        ],
        "about": "Adventures in Sound is a free-form show that explores music spanning more than 120 years of recorded sound. Every week for nearly a decade, Dennis Campa has highlighted a variety of music from his collection of 15,000 plus records and cd's."
        }
    },
    {
        "programInformation": {
        "programName": "Stronger Than Dirt",
        "programDay": "Saturday",
        "programTimeStart": "8:00PM",
        "programTimeEnd": "10:00PM",
        "programWebsite": "http://www.koop.org/programs/stronger-dirt",
        "programThumbnail": "http://www.bandmine.com/photos/01/05/82/76/b/p_uku.jpg",
        "programDJs": [
            "Scott Gardner"
        ],
        "programGenres": [
            "punk",
            "hardcore rock",
            "rock"
        ],
        "about": "High energy showcase for underground rock and roll from the mid 60's to present day. Stronger than Dirt includes garage, psyche, glam, punk, new wave, power pop, and other fun sounds. A great jumpstart for Saturday night.",
        }
    },
    {
        "programInformation": {
        "programName": "Hip Hop Hooray",
        "programDay": "Sunday",
        "programTimeStart": "2:00PM",
        "programTimeEnd": "3:30PM",
        "programWebsite": "http://www.koop.org/programs/hip-hop-hooray",
        "programThumbnail": "https://scontent-a-pao.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10702203_867454219932659_2939669713411869093_n.jpg?oh=7fd72759a8e6ca49cf9b8122b8361ba5&oe=54DCCB3A",
        "programDJs": [
            "Miss Manners",
            "DJ T-Kay"
        ],
        "programGenres": [
            "hip-hop"
        ],
        "about": "Bringing you the best roots, golden age, underground, conscious and world hip-hop."
        }
    },
    {
        "programInformation": {
        "programName": "Andean Hour",
        "programDay": "Tuesday",
        "programTimeStart": "12:00PM",
        "programTimeEnd": "1:00PM",
        "programWebsite": "http://www.koop.org/programs/andean-hour",
        "programThumbnail": "http://mmpt-pictures.s3.amazonaws.com/andean-musiciancs.jpg",
        "programDJs": [
            "Gilka Cespedes"
        ],
        "programGenres": [
            "latin",
            "native american traditional"
        ],
        "about": "The Andean Hour (La Hora Andina) features the musical traditions of the Andean countries - Bolivia, Peru - Ecuador, and parts of Chile and Argentina."
        }
    },
    {
        "programInformation": {
        "programName": "Strictly Bluegrass",
        "programDay": "Sunday",
        "programTimeStart": "10:00AM",
        "programTimeEnd": "12:00PM",
        "programWebsite": "http://www.koop.org/programs/strictly-bluegrass",
        "programThumbnail": "http://images.fineartamerica.com/images-medium-large-5/bluegrass-design-robin-martin-parrish.jpg",
        "programDJs": [
            "Ted Branson",
            "Shardon Sandomirsky"
        ],
        "programGenres": [
            "bluegrass"
        ],
        "about": "Strictly Bluegrass is one of the first programs on KOOP radio and the only radio program dedicated to playing Bluegrass music in Central Texas."
        }
    },
    {
        "programInformation": {
        "programName": "Jamaican Gold",
        "programDay": "Sunday",
        "programTimeStart": "12:00PM",
        "programTimeEnd": "2:00PM",
        "programWebsite": "http://www.koop.org/programs/jamaican-gold",
        "programThumbnail": "http://photos2.meetupstatic.com/photos/event/4/9/e/7/global_21138919.jpeg",
        "programDJs": [
            "Art Baker"
        ],
        "programGenres": [
            "reggae",
            "rocksteady",
            "ska",
            "dub",
        ],
        "about": "Your one-stop radio source for vintage ska and reggae, and everything in between...."
        }
    },
    {
        "programInformation": {
        "programName": "The Lounge Show",
        "programDay": "Saturday",
        "programTimeStart": "10:00AM",
        "programTimeEnd": "12:00PM",
        "programWebsite": "http://www.koop.org/programs/lounge-show",
        "programThumbnail": "http://1.bp.blogspot.com/-xqqHDKciKUU/UHct7bUjsqI/AAAAAAAAK3g/5ryGwifkQfw/s400/Cocktail+Lounge.jpg",
        "programDJs": [
            "Jay Robillard"
        ],
        "programGenres": [
            "bebop",
            "big band",
            "lounge",
            "swing"
        ],
        "about": "The Lounge Show is premium Hi-Fi kitschy fun, featuring Mambos, cha cha's, exotica, easy listening, catchy instrumentals, jet set, movie and TV soundtracks..."
        }
    },
    {
        "programInformation": {
        "programName": "Czech Melody Time",
        "programDay": "Sunday",
        "programTimeStart": "9:00AM",
        "programTimeEnd": "10:00AM",
        "programWebsite": "http://www.koop.org/programs/czech-melody-time",
        "programThumbnail": "http://0.tqn.com/d/goeasteurope/1/S/k/6/-/-/CzechDance.jpg",
        "programDJs": [
            "Thomas Durnin"
        ],
        "programGenres": [
            "polka",
            "waltz",
            "march"
        ],
        "about": "On the air since the beginning of June 1995, Czech Melody Time features Texas polka, waltz and march music as represented by the music performed and recorded by various orchestras of Texas-Czech, German and Polish origin, both past and present."
        }
    },
    {
        "programInformation": {
        "programName": "This Great White North",
        "programDay": "Friday",
        "programTimeStart": "4:30PM",
        "programTimeEnd": "6:00PM",
        "programWebsite": "http://www.koop.org/programs/graet-white-north",
        "programThumbnail": "http://thechronicleherald.ca/sites/default/files/cpt10684609_20110920125155_13554_Provincial_09-21-11_J9JAS2S_1.jpg",
        "programDJs": [
            "Doug the Canuck",
            "Justin the Canuck",
            "Simone the Canuck"
        ],
        "programGenres": [
            "eclectic",
            "independent canadian"
        ],
        "about": "This Great White North brings independent Canadian music to Austin, TX every Friday at 4:30 PM."
        }
    },
    {
        "programInformation": {
        "programName": "Elk Mating Ritual Show",
        "programDay": "Thursday",
        "programTimeStart": "4:30PM",
        "programTimeEnd": "6:00PM",
        "programWebsite": "http://www.koop.org/programs/elk-mating-ritual-show",
        "programThumbnail": "http://thegraphicsfairy.com/wp-content/uploads/blogger/-JwqrgtF8EjM/TtjABzyPTtI/AAAAAAAAPio/2n2KlOi7BpA/s1600/Christmas%2BElk%2BGraphicsFairybw3.jpg",
        "programDJs": [
            "John Erler"
        ],
        "programGenres": [
            "eclectic",
            "comedy"
        ],
        "about": "Thursdays at 4:30pm. No description provided by KOOP but this is one of their best shows. Crazy mix of music and awesome hosts."
        }
    },
    {
        "programInformation": {
        "programName": "Punk Melody Time",
        "programDay": "Thursday",
        "programTimeStart": "3:00PM",
        "programTimeEnd": "4:30PM",
        "programWebsite": "http://www.koop.org/programs/punk-melody-time",
        "programThumbnail": "http://ffmedia.ign.com/interviews/multimedia/bigkiss.jpg",
        "programDJs": [
            "Dan Cofer"
        ],
        "programGenres": [
            "punk",
            "hardcore"
        ],
        "about": "Short, fast and catchy as heck punk rock and powerful pop music. High energy music with pop hooks that are sure to rot one’s teeth. Every song is guaranteed to stick in your head until you want to pry it out with a rusty crowbar."
        }
    },
    {
        "programInformation": {
        "programName": "The Clear Spot",
        "programDay": "Saturday",
        "programTimeStart": "7:00PM",
        "programTimeEnd": "8:00PM",
        "programWebsite": "http://www.koop.org/programs/clear-spot",
        "programThumbnail": "https://pbs.twimg.com/profile_images/508641801884819456/t62Ah3nO_400x400.png",
        "programDJs": [
            "Linda Maher",
            "Bryan Carroll"
        ],
        "programGenres": [
            "eclectic"
        ],
        "about": "No rules, no agenda, just quality music for open-minded listeners. Everything from obscure underground oldies to brand new releases: experimental rock, classic soul, crime jazz, latin boogaloo, country murder ballads, local demos and more share the airwaves for an hour of aural exploration."
        }
    },
    {
        "programInformation": {
        "programName": "Rock N' Roll Pest Control",
        "programDay": "Wednesday",
        "programTimeStart": "3:00PM",
        "programTimeEnd": "4:30PM",
        "programWebsite": "http://www.koop.org/programs/rock-n-roll-pest-control",
        "programThumbnail": "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/205660_10150154089077781_4395755_n.jpg?oh=245737c04da34ca78d9d930da2d5f0e5&oe=551F7B8D&__gda__=1424309852_ace5b8c71ced39e1e21dbabc27325c40",
        "programDJs": [
            "Miss Novak"
        ],
        "programGenres": [
            "metal",
            "punk",
            "hardcore",
            "rock"
        ],
        "about": "A high-octane guitar-oriented rock/metal/punk show to fuel inject those dangerous mid-week doldrums. You can check out Rock N Roll Pest Control on Facebook....just search for Rock N Roll Pest Control, look for the picture of Lemmy, and there ya go!"
        }
    }
    ]
};

db.insertDocuments(station, function(result){
    console.log(result);
    console.log('inserted a station');
});