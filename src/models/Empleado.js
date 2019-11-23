'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    apellidos:  String,
    nombre:  String,
    apellidos:  String,
    tratamiento:  String,
    fechaNacimiento: Date,
    fechaContratacion:  Date,
    direccion:  String,
    ciudad:  String,
    region:  String,
    codigoPostal:  String,
    pais:  String,
    telefono:  String,
    extencion: String,
    fotoPath: String
  });

  const Empleado = mongoose.model("Empleado", EmpleadoSchema);
  module.exports = Empleado