'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/pedidos',(req, res)=>{
        return res.status(200).send("Se obtiene todos los pedidos");
    });

    app.get('/pedido/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco la pedido:"+id);
    });

    app.post('/pedido', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/pedido/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó la pedido:"+id);
    });

    app.put('/pedido/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza la pedido con id:"+id,
            empleado: empleadoInput
        });
    });
}