const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require('./database/conexion')
const app =express();

const personaControllers = require('./controllers/personaC');



const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
/*app.use(cors({
    origin: 'https://localhost:3001',
}));*/


app.get('/', async (req, res) => {
    /*res.send('los usuarios estan lsitos')*/
    const data = await personaControllers.find();
    res.json({
        personas : await personaControllers.find()
    })
});

app.get('/crear', async (req, res) => {
    console.log(req.body);
    await personaControllers.create(req.body);
    res.json('usuario creado')

});


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});