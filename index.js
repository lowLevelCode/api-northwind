'use strict'

const app           = require('./app');
const mongoose      = require('mongoose');

mongoose.connect('mongodb://localhost/northwind', { useNewUrlParser: true, useUnifiedTopology: true }).then( 
    () => { 
        console.log("Conexion abierta"); 
        app.listen(3900,() => {
            console.log("servidor corriendo");   
        });
    },     
    err => { console.err("error al abrir conexion"); }     
);
