'use strict'

var Empleado = require('../models/Empleado');

module.exports.controller = (app) => 
{ 
    app.get('/empleados',(req, res)=>{        
        Empleado.find({},(error, empleados)=>{            
            if(error)
                return res.status(400).send("Error interno del servidor");
            return res.status(200).send(empleados);
        });
    });

    app.get('/empleado/:id',(req, res)=>{      
        var id = req.params.id;          
        Empleado.findById(id,  (error, empleado) =>{
            if(error)
                return res.status(400).send("Error interno del servidor");
            return res.status(200).send(empleado);
        });
    });

    app.post('/empleado', (req, res)=>{
        var empleadoInput = req.body;                      
        const empleado = new Empleado(empleadoInput);

        empleado.save((error) => 
        {  
            if(error)
                return res.status(400).send("Error interno del servidor");                 
            return res.status(200).send("Guardado Correctamente");
        });    
    });

    app.delete('/empleado/:id',(req, res)=>{      
        var id = req.params.id;  
        Empleado.deleteOne({_id:id},  (error)=> {            
            if(error)
                return res.status(400).send("Error interno del servidor");
            return res.status(200).send("Se eliminó al empleado:"+id);
        });        
    });

    app.put('/empleado/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;        

        Empleado.findOneAndUpdate({_id:id}, empleadoInput, (error)=> {  
            if(error)
                return res.status(400).send("Error interno del servidor");
            return res.status(200).send("Se actualizó al empleado:"+id);
        });        
    });
}