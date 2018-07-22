var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database :  'application'
  });

  connection.connect(function(error) {
    if (error) {
      console.log(error);
      return;
    }
  
    console.log('database connection created');
  });



  module.exports = connection;

//   console.log("my connection");
