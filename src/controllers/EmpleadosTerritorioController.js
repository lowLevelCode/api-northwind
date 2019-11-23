'use strict'

module.exports.controller = (app) => 
{ 
    app.get('/empleados',(req, res)=>{
        return res.status(200).send("Se obtiene todos los empleados");
    });

    app.get('/empleado/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se busco al empleado:"+id);
    });

    app.post('/empleado', (req, res)=>{
        var empleadoInput = req.body;                
        return res.status(200).send({
            message: "Se guardo correctamente",
            empleado: empleadoInput
        });         
    });

    app.delete('/empleado/:id',(req, res)=>{      
        var id = req.params.id;  
        return res.status(200).send("Se eliminó al empleado:"+id);
    });

    app.put('/empleado/:id',(req, res) =>{      
        var id = req.params.id;  
        var empleadoInput = req.body;
        
        return res.status(200).send({
            message: "Se actualiza el empleado con id:"+id,
            empleado: empleadoInput
        });
    });
}