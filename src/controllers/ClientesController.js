'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/clientes',(req, res)=>{
        return res.status(200).send("Se obtiene todos las clientes");
    });

    app.get('/cliente/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la cliente:"+id);
    });

    app.post('/cliente', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/cliente/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la cliente:"+id);
    });

    app.put('/cliente/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la cliente con id:"+id,
            empleado: empleadoInput
        });
    });
}