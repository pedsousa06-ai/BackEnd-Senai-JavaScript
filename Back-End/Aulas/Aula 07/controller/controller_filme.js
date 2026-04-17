/*********************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação , tratamento e
 *      manipulacao de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Pedro
 * Versão: 1.0
 *********************************************************************************************************/

//Funçaõ para inserir um novo filme
const inserirNovoFilme = async function (filme){
    if(filme.nome == '' || filme.nome == null ||  filme.nome == undefined || filme.nome.length > 80){

    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento){

    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length >5){

    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined ){

    }else if(isNaN(filme.avaliacao)|| filme.avaliacao.length >3){

    }else if(filme.valor == '' || filme.valor == null || filme.valor.length > 5 || isNaN(filme.valor)){

    }else if(filme.capa.length >255)
}

//Função para atualizar um filme
const atualizarFilme = async function (){
    
}

//Função para retornar todos os filmes
const listarFilme = async function (){

}

//Funçaõ para buscar um filme pelo id 
const buscarFilme = async function(){

}

//Funcao para excluir um filme
const excluirFilme = async function(){

}