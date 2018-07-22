var express = require("express");
var app = express();

var config = require("./config");
var api = require("./api");

//  var bodyparser = require("body-parser");

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
//  // parse application/json
// app.use(bodyParser.json())


app.listen(config.port, function(error) {
    if (error) {
        console.log("error");
    } else {
        console.log("port working on" + config.port);
    }

});


// app.use(function(req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
//     next();
// });


// app.set("auth_key", config.auth_key);
// app.use("/nani/", require("./api"));
