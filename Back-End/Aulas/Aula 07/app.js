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
    origin: '*', //Origem da requisição, podendo ser um IP ou um * (Todos)
    methods: 'GET , POST, PUT, DELETE , OPTIONS', //S´~ao os verbos que serão liberados na API ( GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalhos do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON , async function (request,response){

    

    let dados =(request.response)

    let contentType =(request.responseers['content-type'])

    let result = await controllerFilme.inseirNovoFilme(dados,contentType)

    response.status(result.status_code).json(result)

})


app.post('/v1/senai/locadora/filme', bodyParserJSON, async function (request, response) {

    let dados = request.body                           
    let contentType = request.headers['content-type'] 

    let result = await controllerFilme.inserirNovoFilme(dados, contentType) 

    response.status(result.status_code).json(result)
})


  app.get('/v1/senai/locadora/filme/:id', async function (request, response) {
    let id = request.params.id  
    
    let result = await controllerFilme.buscarFilme(id)
  
    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function (request, response) {

    //Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    //Recebe o ID do registro a ser atualizado
    let id = request.params.id

    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})