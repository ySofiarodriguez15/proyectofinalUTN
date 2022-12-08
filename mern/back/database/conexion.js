
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const URL = process.env.MONGODB;

const conexion = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () =>{
    console.log('Conexion correcta');
});

mongoose.connection.on('error', () =>{
    console.log('Error en mi conexion');
});

module.exports = conexion;
