const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const personaSchema = new Schema({
    nombre:{
    type: 'string',
    required: true
},
    apellido:{
    type: 'string',
    required: true
},
    dni:{
        type:'string',
    required: true
},
    timestamp:{
    type: 'Date',
    default: new Date(),
}
});

const persona= mongoose.model('persona', personaSchema);

module.exports = persona;