'use strict'

var express     = require('express');
var bodyParser  = require('body-parser');
var fs          = require('fs');

var app         = express();

// Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Enrutamiento de los controllers
fs.readdirSync('controllers').forEach( (file) =>
{  
    if(file.substr(-3) == '.js')
    {    
        const route = require('./controllers/' + file);
        route.controller(app)  
    }
});

module.exports = app;