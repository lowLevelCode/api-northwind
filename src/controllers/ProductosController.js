'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/productos',(req, res)=>{
        return res.status(200).send("Se obtiene todos los productos");
    });

    app.get('/producto/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la producto:"+id);
    });

    app.post('/producto', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/producto/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la producto:"+id);
    });

    app.put('/producto/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la producto con id:"+id,
            empleado: empleadoInput
        });
    });
}