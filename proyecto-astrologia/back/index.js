
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

require('./database/conexion')

const app = express();
res.header( "Access-Control-Allow-Origin" );
const ConsultaControllers = require('./controllers/consultaC.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get('/', async (req, res) => {
    res.json({
        consulta: await ConsultaControllers.findAll()
    }); 
});

app.post('/crear', async (req, res) => {
    //console.log(req.body);
        await ConsultaControllers.create(req.body);
    res.json('Consulta Creada')
});

app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    await ConsultaControllers.delete(id);
    res.json('Consulta Eliminada')
});


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})