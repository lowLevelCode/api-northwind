'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/regiones',(req, res)=>{
        return res.status(200).send("Se obtiene todos los regiones");
    });

    app.get('/region/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la region:"+id);
    });

    app.post('/region', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/region/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la region:"+id);
    });

    app.put('/region/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la region con id:"+id,
            empleado: empleadoInput
        });
    });
}