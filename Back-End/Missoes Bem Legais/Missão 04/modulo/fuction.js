/*************************************************************************************************************************************************************
 * Funções Para missão 4 Muito Legal
 * Autor: Pedro
 * Data inicio: 18/03/2026
 ************************************************************************************************************************************************************/

const listaDeEstados = require("./estados_cidades")



// retorna um objeto com todas as siglas dos estados e a quantidade total
function getListaDeEstados() {

    // percorre cada estado do array e pega apenas a sigla de cada um
    // o map transforma o array de objetos em um array só de siglas
    let siglas = listaDeEstados.estados.map(function(estado) {
        // para cada estado, retorna só a sigla dele
        return estado.sigla
    })

    // verifica se o array de siglas está vazio
    // se não tiver nenhum estado, retorna false
    if(siglas.length == 0) {
        return false
    }

    // retorna um objeto com todas as siglas e a quantidade total de estados
    return {
        uf: siglas,
        quantidade: siglas.length
    }
}

console.log(getListaDeEstados())



// recebe uma sigla e retorna os dados do estado correspondente
function getDadosEstados(uf) {

    // procura o estado que tem a sigla igual ao parametro recebido
    // o find retorna o primeiro elemento que satisfaz a condição
    let estado = listaDeEstados.estados.find(function(estado){
        return estado.sigla == uf
    })

    // se não encontrar nenhum estado com a sigla informada, retorna false
    if(estado == undefined){
        return false
    }

    // retorna um objeto com os dados do estado encontrado
    return{
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital,
        regiao: estado.regiao
    }
}

console.log(getDadosEstados('PI'))



// recebe uma sigla e retorna a capital do estado correspondente
function getCapitalEstado(uf) {

    // procura o estado que tem a sigla igual ao parametro recebido
    // o find retorna o primeiro elemento que satisfaz a condição
    let estado = listaDeEstados.estados.find(function(estado) {
        return estado.sigla == uf
    })

    // se não encontrar nenhum estado com a sigla informada, retorna false
    if (estado == undefined) {
        return false
    }

    // retorna um objeto com a sigla, nome e capital do estado encontrado
    return {
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital
    }
}

console.log(getCapitalEstado('AC'))



// recebe uma regiao e retorna todos os estados que pertencem a ela
function getEstadosRegiao(regiao){

    // percorre todos os estados e mantém apenas os que têm a regiao igual ao parametro recebido
    // o filter retorna um array com todos os elementos que satisfazem a condição
    let estado = listaDeEstados.estados.filter(function(estado){
        return estado.regiao == regiao
    })

    // se não encontrar nenhum estado com a regiao informada, retorna false
    if(estado.length == 0){
        return false
    }

    // retorna um objeto com a regiao e a lista de estados encontrados
    return {
        regiao: regiao,
        estados: estado.map(function(estado){
            return {
                uf: estado.sigla,
                descricao: estado.nome
            }
        })
    }
}

console.log(getEstadosRegiao("Sul"))



// cria um JSON com os estados que já foram capitais do Brasil
function criaListaDeCapitais() {

    // filtra os estados que têm a propriedade capital_pais
    // depois transforma cada estado no formato desejado com o map
    let capitais = listaDeEstados.estados
        .filter(function(estado) {
            // mantém apenas os estados que têm capital_pais no JSON
            return estado.capital_pais != undefined
        })
        .map(function(estado) {
            // para cada estado filtrado, monta o objeto no formato desejado
            return {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            }
        })

    // se não encontrar nenhum estado com capital_pais, retorna false
    if (capitais.length == 0) {
        return false
    }

    // retorna um objeto com a lista de capitais no mesmo formato do listaDeEstados
    return { capitais: capitais }
}

// chama a função e guarda o resultado em uma variável global
// para que getCapitalPais() possa usar
var listaDeCapitais = criaListaDeCapitais()



// retorna todos os dados das capitais do Brasil
// retorna todos os dados das capitais do Brasil
function getCapitalPais() {

    // verifica se o array de capitais está vazio
    // se não tiver nenhuma capital, retorna false
    if (listaDeCapitais.capitais.length == 0) {
        return false
    }

    // retorna um objeto com o titulo capitais e a lista de capitais
    return {
        capitais: listaDeCapitais.capitais.map(function(capital) {
            return {
                capital_atual: capital.capital_atual,
                uf: capital.uf,
                descricao: capital.descricao,
                capital: capital.capital,
                regiao: capital.regiao,
                capital_pais_ano_inicio: capital.capital_pais_ano_inicio,
                capital_pais_ano_termino: capital.capital_pais_ano_termino
            }
        })
    }
}

console.log(getCapitalPais())





// recebe uma sigla e retorna as cidades do estado correspondente
function getCidades(uf) {

    // procura o estado que tem a sigla igual ao parametro recebido
    // o find retorna o primeiro elemento que satisfaz a condição
    let estado = listaDeEstados.estados.find(function(estado){
        return estado.sigla == uf
    })

    // se não encontrar nenhum estado com a sigla informada, retorna false
    if(estado == undefined){
        return false
    }

    // retorna um objeto com os dados do estado e a lista de cidades
    return{
        uf: estado.sigla,
        descricao: estado.nome,
        quantidade_cidades: estado.cidades.length,
        cidades: estado.cidades.map(function(cidade){
            // para cada cidade, retorna apenas o nome
            return cidade.nome
        })
    }
}

console.log(getCidades("AC"))

module.exports = 
     getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades