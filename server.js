//  var http = require('http');

// // // Create a server object
// // http.createServer(function (req, res) {
	
// // 	// http header
// // 	res.writeHead(200, {'Content-Type': 'text/html'});
	
// // 	var url = req.url;
// // 	//GET /movies
// // 	if(url ==='/movies') {
// // 		res.write('All Movies Data in JSON format from Mongo DB');
// // 		res.end();
// // 	}
// //     //GET /genres
// // 	else if(url ===' /genres') {
// // 		res.write('All Genres Data in JSON format from Mongo DB');
// // 		res.end();
// // 	}
// //     //GET /artists
// // 	else if(url ===' /artists') {
// // 		res.write('All Artists Data in JSON format from Mongo DB');
// // 		res.end();
// // 	}
// // }).listen(3000, function() {
	
// // 	// The server object listens on port 3000
// // 	console.log("server start at port 3000");
// // });


// var express = require('express');
// var app = express();
// path = require("path"),
// cors = require("cors"); 
// bodyParser = require("body-parser");

// const PORT = 8085;

// var corsOptions = {
//   origin: "http://localhost:"+PORT
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));

// app.get('/', function (req, res) {
//     res.json({ message: "Welcome to Upgrad Movie booking application development." });
// });

// // app.get('/movies', function (req, res) {
// //     res.json({ message: "All Movies Data in JSON format from Mongo DB" });
// // });

// // app.get('/genres', function (req, res) {
// //     res.json({ message: "All Genres Data in JSON format from Mongo DB" });
// // });


// // app.get('/artists', function (req, res) {
// //     res.json({ message: "All Artists Data in JSON format from Mongo DB" });
// // });


// app.use(function(req, res, next) {
//     res.status(404);
//     res.send('404: File Not Found');
// });

// require("./routes/movie.routes")(app);
// require("./routes/artist.routes")(app);
// require("./routes/genre.routes")(app);
// require("./routes/user.routes")(app);


// app.listen(8085, function () {
//     console.log('Example app listening on port 8085!');
// });

// const db = require("./models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

var express = require("express"),
  http = require("http"),
  fs = require("fs"),
  path = require("path"),
  cors = require("cors");  //TODO:

  bodyParser = require("body-parser");

// Running on posrt 9000
const PORT = 8085;


var app = express();

var corsOptions = {
  origin: "http://localhost:"+PORT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// app.get("/movie", findAllMovies);
// app.get('',findOne);

// app.get('/genres',function(req,res){
//     res.send("All Genres Data in JSON format from Mongo DB")
// })

// app.get('/artists',function(req,res){
//     res.send("All Artists Data in JSON format from Mongo DB")
// })
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

require("./routes/movie.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/user.routes")(app)

app.listen(PORT, function () {
  console.log("express has started on port ", PORT);
});