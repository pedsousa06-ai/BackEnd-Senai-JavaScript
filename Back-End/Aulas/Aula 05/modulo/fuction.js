/*************************************************************************************************************************************************************
 * Funções Para missão 4 Muito Legal
 * Autor: Pedro
 * Data inicio: 18/03/2026
 ************************************************************************************************************************************************************/
 
const listaDeEstados = require("./estados_cidades")
 
 
 
// retorna um objeto com todas as siglas dos estados e a quantidade total
function getListaDeEstados() {
    let siglas = listaDeEstados.estados.map(function(estado) {
        return estado.sigla
    })
 
    if(siglas.length == 0) {
        return false
    }
 
    return {
        uf: siglas,
        quantidade: siglas.length
    }
}
 
 
// recebe uma sigla e retorna os dados do estado correspondente
function getDadosEstados(uf) {
    uf = uf.toUpperCase()
    let estado = listaDeEstados.estados.find(function(estado){
        return estado.sigla == uf
    })
 
    if(estado == undefined){
        return false
    }
 
    return{
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital,
        regiao: estado.regiao
    }
}
 
 
// recebe uma sigla e retorna a capital do estado correspondente
function getCapitalEstado(uf) {
    uf = uf.toUpperCase()
    let estado = listaDeEstados.estados.find(function(estado) {
        return estado.sigla == uf
    })
 
    if (estado == undefined) {
        return false
    }
 
    return {
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital
    }
}
 
 
// recebe uma regiao e retorna todos os estados que pertencem a ela
function getEstadosRegiao(regiao){
    regiao = regiao.toLowerCase()
    let estado = listaDeEstados.estados.filter(function(estado){
        return estado.regiao.toLowerCase() == regiao
    })
 
    if(estado.length == 0){
        return false
    }
 
    return {
        regiao: estado[0].regiao,
        estados: estado.map(function(estado){
            return {
                uf: estado.sigla,
                descricao: estado.nome
            }
        })
    }
}
 
 
// cria um JSON com os estados que já foram capitais do Brasil
function criaListaDeCapitais() {
    let capitais = listaDeEstados.estados
        .filter(function(estado) {
            return estado.capital_pais != undefined
        })
        .map(function(estado) {
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
 
    if (capitais.length == 0) {
        return false
    }
 
    return { capitais: capitais }
}
 
var listaDeCapitais = criaListaDeCapitais()
 
 
// retorna todos os dados das capitais do Brasil
function getCapitalPais() {
    if (listaDeCapitais.capitais.length == 0) {
        return false
    }
 
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
 
 
// recebe uma sigla e retorna as cidades do estado correspondente
function getCidades(uf) {
    uf = uf.toUpperCase()
    let estado = listaDeEstados.estados.find(function(estado){
        return estado.sigla == uf
    })
 
    if(estado == undefined){
        return false
    }
 
    return{
        uf: estado.sigla,
        descricao: estado.nome,
        quantidade_cidades: estado.cidades.length,
        cidades: estado.cidades.map(function(cidade){
            return cidade.nome
        })
    }
}
 
 
module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}