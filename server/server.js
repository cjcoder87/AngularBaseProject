//Initiallising node modules

var express = require('express');
var cors = require('cors');
var tediousExpress = require('express4-tedious');
var tediousExpress = require('express4-tedious');
var bodyParser = require("body-parser");  
var TYPES = require('tedious').TYPES;
//  var Request = require('tedious').Request; 

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Credentials for Azure database
var config =
{
    userName: '',  //fill in username
    password: '',  //fill in password
    server: '',      //fill in server url
    options: {encrypt: true, database: ''} //fill in database name

}



app.use(function (req, res, next) {
    req.sql = tediousExpress(config);
    next();
});

//GET API both work

app.get('/api/scenarios', function (req, res) {
    req.sql("select * from scenarios for json path")
    .into(res);
})


app.get('/api/scenarios/:id', function (req, res) {
    req.sql("select * from scenarios where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, {}); 
 }); 
//POST API works
// app.post("/api/scenarios", function(req , res){
//     req.sql("INSERT INTO scenarios (scenarioname,scenarioowner,scenariodate,scenarioversion,scenariostatus) VALUES (req.body.scenarioname, req.body.scenarioowner, req.body.scenariodate,req.body.scenarioversion,req.body.scenariostatus)")
//     // .param('id', req.params.id, TYPES.Int)
//     .into(res.sendStatus(201), res);
    
// });
app.post('/api/scenarios', (request, response) => {
    const name = request.body.scenarioname;
    const owner = request.body.scenarioowner;
    const date = request.body.scenariodate;
    const version = request.body.scenarioversion;
    const status = request.body.scenariostatus;

    console.log('at least I started the post function here');
    console.log(request.body);
    console.log(request.body.scenarioname);
    request.sql("INSERT INTO scenarios (scenarioname,scenarioowner,scenariodate,scenarioversion,scenariostatus) VALUES ('" + name + "', '" + owner + "', '" + date + "', '" + version + "', '" + status + "')")
 .into(response.sendStatus(201), response);    
});

//PUT API works
app.put("/api/scenarios/:id", function(req , res){

    req.sql("UPDATE scenarios SET ContactName = 'Vegeto' WHERE id = @id")
    .param('id', req.params.id, TYPES.Int)
    .into(res.sendStatus(200));
});

// DELETE API works
app.delete("/api/scenarios/:id", function(req , res){
    req.sql("DELETE FROM scenarios WHERE id = @id")
    .param('id', req.params.id, TYPES.Int)
    .into(res.sendStatus(204));

});


//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });