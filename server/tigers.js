// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server


// var lionRouter = require('express').Router();
var tigerRouter = require('express').Router(); //get 'er up.

// var lions = [];
// var id = 0;
var tigers = []; //create array
var id = 0; //initiate id counter

// var updateId = function(req, res, next) {
//   if (!req.body.id) {
//     id++;
//     req.body.id = id + '';
//   }
//   next();
// };
var updateId=function(req, res, next){
  if (!req.body.id){
    id++
    req.body.id = id + '';
  }
  next();
};

// lionRouter.param('id', function(req, res, next, id) {
//   var todo = _.find(todos, {id: id});
//
//   if (todo) {
//     req.todo = todo;
//     next();
//   } else {
//     res.send();
//   }
// });
tigerRouter.param('id', function(req, res, next, id){
  var todo = _.find(todos, {id: id});
  if (todo){
    req.todo = todo;
    next();
  }
  else{
    res.send();
  }
});

// lionRouter.get('/', function(req, res){
//   res.json(lions);
// });
//
// lionRouter.get('/:id', function(req, res){
//   var lion = req.todo;
//   res.json(lion || {});
// });
//
// lionRouter.post('/', updateId, function(req, res) {
//   var lion = req.body;
//
//   lions.push(lion);
//
//   res.json(lion);
// });

tigerRouter.get('/', function(req, res){
  res.json(tiger);
});

tigerRouter.get('/:id', function(req, res){
  var tiger = req.todo;
  res.json(lion || {});
});

tigerRouter.post('/', updateId, function(req, res){
  var tiger = req.body;
  tigers.push(tiger);
  res.json(tiger);
})

//
// lionRouter.put('/:id', function(req, res) {
//   var update = req.body;
//   if (update.id) {
//     delete update.id
//   }
//
//   var lion = _.findIndex(lions, {id: req.params.id});
//   if (!lions[lion]) {
//     res.send();
//   } else {
//     var updatedLion = _.assign(lions[lion], update);
//     res.json(updatedLion);
//   }
// });
//

tigerRouter.put('/:id', function(req, res){
  var update = req.body;
  if (update.id){
    delete update.id;
  }
  var tiger = _.findIndex(lions, {id: req.params.id}) ;
  if (!tigers[tiger]){
    res.send();
  }
  else{
    var updatedTiger = _.assign(tigers[tiger], update);
    res.json(updatedTiger);
  }
});
// module.exports = lionRouter;
module.exports = tigerRouter;
