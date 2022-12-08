const persona = require('../models/personaM');


class personaControllers{

    async findAll(){
        try {
            return await persona.find();
        } catch (error) {
            throw error;
        }
    }

    async create(persona){
        try {
            return await persona.create(persona);
        } catch (error) {
            throw error;
        }
    }

}


module.exports = new personaControllers; /*osea, se exporta la clase, no el archivo o nombre de la hoja. en este caso exporta el findAll y create pero puede ser directo new personaControllers*/