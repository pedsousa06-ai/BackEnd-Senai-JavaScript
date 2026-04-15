/**************************************************************************************************
 * Objetivo: Arquivo reponsável pelo CRUD no banco de dados MySQL na tabela
 *          Filme
 * Data: 15/0/2026
 * Autor: Pedro
 * Versão: 1.0
 ***************************************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySQL no node.js
const lnex = require('knex')

//Import do arquivo de configyuracao para a conexao com o banco de dados MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexao com o BD MySQL
const knexConect = knex(knexConfig.development)


//Função para inserir dados na tabela de filmes 
const insertFilme = async function(filme){
    let sql = 
        `insert into tbl_filme ( nome, 
            data_lancamento, 
            duracao, 
            sinopse, 
            avaliacao, 
            valor, 
            capa )
        values(
            '${filme.nome}'
            '${filme.data_lancamento}'
            '${filme.duracao}'
            '${filme.sinopse}'
            '${filme.avaliacao}'
            '${filme.valor}'
            '${filme.capa}'
            );`

    //Executar o ScriptSQL no banco de dados
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function (filme){
    
}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function (){

}

//Funçaõ para retornar os dados do filme filtrando pelo Id
const selectByIdFilme = async function(id){

}

//Função para excluir o filme pelo ID
const delectFilme = async function(id){

}

module.export = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    delectFilme
}