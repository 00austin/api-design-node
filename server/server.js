// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

app.get('/lions', function(req, res){
  res.json(lions); //sends lions array
});

app.get('/lions/:id', function(req, res){
  var lion = _.find(lions, {id: req.params.id});//use lodash_.find to  search in lions and request parameters that match id
  res.json(lion || {}); //respond with id'd lion or empty array
});

app.post('/lions', function(req, res){
  var lion = req.body;
  id++;
  lion.id = id + ''; //coerce id toString
  lions.push(lion); //push lion to end of lions array
  res.json(lion); //give that bad boy back.
});

app.put('/lions/:id', function (req, res){
  var update = req.body; //stuff we want to update
  if (update.id){ // if tryna update id
    delete update.id; //delete that shit
  }
  var lion = _.findIndex(lions, {id: req.params.id}); // lodash_.findIndex fines array index in lions of matching id
  //looking to see if this lion exists in array
  if (!lions[lion]){ //if no match
    res.send(); //send nothing back
  }
  else{
    var updatedLion= _.assign(lions[lion], update);
    //this is extending. takes two objects, merges the right into the left
    res.json(updatedLion); //send it back
  }
});

app.delete('/lions/:id', function (req, res){
  var lion = _.findIndex(lions, {id: req.params.id}); //same as above
  if (!lions[lion]){ //if no match
    res.send(); //send nothing back
  }
  else{
    var deletedLion = lions[lion];
    lions.splice(lion, 1); //array.splice(start, deleteCount)
    res.json(deletedLion)
  }

});

// TODO: make the REST routes to perform CRUD on lions

app.listen(3000);
console.log('on port 3000');
