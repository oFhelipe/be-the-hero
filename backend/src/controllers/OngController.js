const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    /*
    Tipo de parametros:

    Query Params: Parametros nomeados enviados na rota após o (?) para filtros paginação
    Route Params: usados para identificar recursos
    Request Body:  usado para criar e editar dados
    */
   async index(request, response){

    const ongs = await connection('ongs').select('*');

    return response.json(ongs);

    },

    async create(request, response){

        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();
    
          await connection('ongs').insert({
                    id,
                    name, 
                    email, 
                    whatsapp, 
                    city, 
                    uf
                });
    
          return response.json({ id });
    
    }
}