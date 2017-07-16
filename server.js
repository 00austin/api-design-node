// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'}
app.get('/', function(req, res){
//response is to call sendFile
//takes absolute path
//double underscore gets dir name,then adds selected file (index)
//also clls function for errors
  res.sendFile(__dirname + '/index.html', function(err){
    if (err){
      res.status(500).send(err);
    }
  });
});

app.get('/data', function(req, res){
  res.json(jsonData); //sends jsonData var
});
var port = 3000; //listen on 30000
app.listen(port, function(){
  console.log('listening on', port);
});
