'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/provedores',(req, res)=>{
        return res.status(200).send("Se obtiene todos los provedores");
    });

    app.get('/provedor/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la provedor:"+id);
    });

    app.post('/provedor', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/provedor/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la provedor:"+id);
    });

    app.put('/provedor/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la provedor con id:"+id,
            empleado: empleadoInput
        });
    });
}