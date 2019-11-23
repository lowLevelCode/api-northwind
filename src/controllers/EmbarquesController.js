'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/embarques',(req, res)=>{
        return res.status(200).send("Se obtiene todos los embarquees");
    });

    app.get('/embarque/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la embarque:"+id);
    });

    app.post('/embarque', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/embarque/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la embarque:"+id);
    });

    app.put('/embarque/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la embarque con id:"+id,
            empleado: empleadoInput
        });
    });
}