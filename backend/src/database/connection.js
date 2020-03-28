const knex = require('knex');



//arquivo que tem as configurações do knex
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//variavel de conexão
//ela recebe o knex com a configuração de desenvolvimento;
const connection = knex(config);


module.exports = connection;