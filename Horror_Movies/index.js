var express = require("express");
var app = express();

// const client = require('prom-client')
// let register = new client.Registry
// client.collectDefaultMetrics({register})

var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: true}));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // use this middleware to allow any request from another server to access node ap
  next();
});

const movies = [
  {
    id: 7,
    title: "splittttt",
    genre: "horror",
    
   
    src:"https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",

    description: 'Kevin Wendell Crumb / Dennis / Patricia / Hedwig / Barry / Orwell / Jade / The Horde: a sufferer of dissociative identity disorder (DID), who has 23 prominent personalities, each possessing a peculiarity or posing a danger to his captives. His body chemistry changes with each personality, resulting in his 24th and final personality, "The Beast", a grotesque sociopath and insatiable cannibal with superhuman capabilities, such as inhuman bodily strength, enhanced speed and agility, along with near-invulnerability and unnatural mobility, to the point of being able to scale walls and ceilings'
  },
  {
    id: 8,
    
    genre: "horror",
    title: "SAWwwww",
    description:
      "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer. Waking up in a bathroom, two men, Adam and Dr. Lawrence Gordon, discover they have been captured by the infamous Jigsaw Killer.",
    
    src:"https://pyxis.nymag.com/v1/imgs/09d/64c/95abab7ece31abcfb22867b5803384248b-24-saw-puppet.rsquare.w700.jpg",
    
  },
  {
    id: 9,
    genre: "horror",
    title: "Conjuring",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror.",

    src:"https://m.media-amazon.com/images/I/81Z7PowQQDL._AC_SL1500_.jpg",
    
  }
]

module.exports.movies = movies

app.get("/", (req, res) => {
  
   res.send(movies)
   
  });

//to get the metrics of node microservcie and translate it so that prometheus 
// app.get('/metrics' , async (request, response) => {
//   response.setHeader('content-type', register.contentType);
//   response.end(await register.metrics());
// });



  if (process.env.NODE_ENV!=='test'){
      app.listen(4000, function() { 
      console.log('Server listening on port 4000'); 
      });
    }
module.exports.app = app