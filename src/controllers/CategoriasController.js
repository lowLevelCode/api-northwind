'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/categorias',(req, res)=>{
        return res.status(200).send("Se obtiene todos las categorias");
    });

    app.get('/categoria/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la categoria:"+id);
    });

    app.post('/categoria', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/categoria/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la categoria:"+id);
    });

    app.put('/categoria/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la categoria con id:"+id,
            empleado: empleadoInput
        });
    });
}