/*******************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Pedro
 * Versão: 1.0
 * 
 * Instalação do EXPRESS - npm install express --save
 *      Dependencia responsavel pela utlilização do protocolo HTTP para criar uma API
 * 
 * Instalação do CORS - npm install cors --save
 *      Depedencia rrsponsavel pelas configurações a serem realizadas 
 *      para a permissão de acesso da API
 * 
 ******************************************************************************************************************************************************/

/*
    ## API

        Protocolo HTTPS contem alguns verbos:

            Get → Solicita dados

            Post → Solicita a inserção de um novo item

            Put → Solicitar um alteração

            Delete → Solicitar apagar algo

    Ultilizaremos a Bibilioteca Express Para Trabalharmos com API

    A partir desse momento o app.js ser usada para fazer a configuração da API
*/

//Import das Depedencias para Criara API

const express = require('express')
const cors = require('cors')
const estadosCidades = require("./modulo/fuction.js")

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um IP ou um * (Todos)
    methods: 'GET', //S´~ao os verbos que serão liberados na API ( GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalhos do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))


//Response -> Retornos da API
//Request -> São chegadas de dados na API


//Criando endpoints para a API
app.get('/v1/senai/estados',function(request, response){

    //Chama a função uqe retorna listas de estados
    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf',function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)

    response.json(estado)
    response.status(200)
})

//Serve para inicializar a API para receber requisições 
app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})

