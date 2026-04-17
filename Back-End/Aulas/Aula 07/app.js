

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Import as controllers do projeto 
const controllerFilme = require("./controller/filme/controller_filme.js")

//Criando um objeto para manipular o express
const app = express()

//Criando um objeto para manipular dados do body da API em formato de JSON

const bodyParserJSON = bodyParser.json()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um IP ou um * (Todos)
    methods: 'GET , POST, PUT, DELETE , OPTIONS', //S´~ao os verbos que serão liberados na API ( GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalhos do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))

//ENDPOINTS
app.post("/v1/senai/locadora/filme", bodyParserJSON ,async function(request, response){
    //Recebe o conteudo dentro do body da requisição
    let dados = request.body
    let result = await controllerFilme.inserirNovoFilme(dados)
    response.status(result.status_code)
    response.json(result)
})








app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})