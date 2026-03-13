/*********************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Pedro
 * Versao: 1.0
 *********************************************************************************************/

/*
    [ ] -> representa um objeto do tipo Array
    { } -> reprsenta um objeto do tipo JSON

    Array -> É um objeto na memória que permite  trabalhar com varios valores 
        em um único objeto 

        let nome = "Jose"
        let nome2 = "Maria"
        let nome3 = "João"

        let nome = ['José','Maria','João']

    JSON -> Um objeto na memória que permite trabalhar com CHAVE e VALOR

        let nome = 'José'
        let telefone = '123456789'
        let email = 'jose@gmail.com'

        let nome {  
                    "nome": "José" , 
                    "telefone": "123456789",
                    "email": "jose@gmail.com"
                    }

*/

//Formas de criar um ARRAY
const listaDeNomes = ['José','Maria',"João","André","Alex"]
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function(){

    //Exibe o objeto array e seu conteudo
    console.log(listaDeNomes)

    //Exibe o objeto array em formato de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNomes[1])

    //Retorna o tipo de dados de um indice do array
    console.log(typeof(listaDeNomes[3]))

    console.log(`o nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[4]}`)

    //Estruturas de repetição
    //while
    console.log(`\n_______________________ WHILE _______________________`)
    let cont = 0

    while (cont < listaDeNomes.length){
        console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
        cont += 1
    }

    console.log("\n_______________________ FOR _______________________")
    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`o nome do cliente é: ${listaDeNomes[contador]}`)
    }


    //retorna o conteudo de cada elemento através de um CALL BACK
    console.log("\n__________________ FOR EACH _______________________")

    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })


    //Retorna o indice do elemento e sera preciso colocar dentro do objeto do array
    //Ex: listaDeNomes[Item]
    //Praticamente igual a FOR e WHILE
    console.log("\n_______________________ FOR IN _______________________")
    for(let cliente in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[cliente]}`)
    }

    //Percorre o Array e retorna somente o conteudo de cada indice, sendo muito
    // parecido com o ForEach
    console.log("________________________ FOR OF ________________________")
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }


    console.log(listaDeNomes.length)
}

const manipularDados = function(){
    
    //Adiconando novos valores ao array através de indices
    listaDeClientes[0] = "Jose Da Silva"
    listaDeClientes[1] = "Maria da Silva"
    listaDeClientes[2] = "João da Silva"
    listaDeClientes[4] = "Alex da Silva"

    console.table(listaDeClientes)
    
    //Permite adioonar novos valores ao array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push("Luizinho da Silva", "André da silva", "Carlos Da Silva")

    console.table(listaDeFornecedores)
    //permite remover elementos baseados em 
                            // splice(indice,quant elementos)

    //Splice() -> Permite adicionar um novo elemento em um determinado lugar do array (indice)
                            //indice 0-> Sifnifica que não será removido ninguém, novo conteudo
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)


    listaDeFornecedores[1] = 'Novo conteudo'
    console.table(listaDeFornecedores)
}

const removerItem = function(nome){

    //Retrona o indice de um elemente fazendo a busca pelo valor
    //Se o index não encontrar o coteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    listaDeNomes.splice(indice,1)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true

    }else {
        return false
    }



}
const verificarItem = function(nome){

    //Verifica a existência de um conteúdo dentro de uma lista(true/false)
    return listaDeNomes.includes(nome)
 
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1

    })
    return cont
}

const criandodadosJSON = function(){
    let aluno = {   "nome": "José", 
                    "ra": 123456, 
                    "telefone": "11975757545", 
                    "emails": "jose@gmail.com"}

    //Exibindo o objeto JSON completo
    console.log(aluno)
    //console.table(aluno)

    //Exibindo apenas um atributo JSON
    console.log(aluno.nome)
    console.log(aluno.gmail)

    //Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)


    //Remove um atributo do JSON
    delete aluno.telefone
    console.log(aluno)
}


const cadastroDeProdutos = function(){

    // Array de objetos representando as cores disponíveis para os produtos
    // Cada objeto possui um id único e o nome da cor
    let cor = [
        {"id": 1, "nomecor": "Branco"}, //Indice 0
        {"id": 2, "nomecor": "Preto"},  //Indice 1   
        {"id": 3 ,"nomecor":"Azul"},    //Indice 2
        {"id": 4, "nomecor": "Rosa"},   //Indice 3
        {"id": 5, "nomecor": "Cinza"}   //Indice 4    
    ]

    // Array de objetos representando as marcas cadastradas
    // Cada marca possui id, nome, telefone e e-mail para contato
    let marcas = [
        {"id": 1, "marca": "Lg",            "telefone": "1234567899", "email": "lg@gmail.com.br"},
        {"id": 2, "marca": "Dell",          "telefone": "5896983689", "email": "dell@gmail.com.br"},
        {"id": 3, "marca": "Lenovo",        "telefone": "5857582689", "email": "lenovo@gmail.com.br"},
        {"id": 4, "marca": "Apple",         "telefone": "4785968328", "email": "apple@gmail.com.br"},
        {"id": 5, "marca": "Rayzer",        "telefone": "5478598392", "email": "rayzer@gmail.com.br"},
        {"id": 6, "marca": "Logitech",      "telefone": "4578236589", "email": "log@gmail.com.br"},
        {"id": 7, "marca": "Multilaser",    "telefone": "5478935828", "email": "multilaser@gmail.com.br"}
    ]

    // Array de objetos representando os produtos cadastrados
    // Cada produto referencia diretamente objetos dos arrays 'cor' e 'marcas'
    let produtos = [
        {
            "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 Polegadas",
            "marca": [
                marcas[1].marca
                ],   
            "qtde": 20,                
            "cor": [
                cor[4],                 
                cor[1]                 
            ],
            "valor": 800.50                                       
        },

        {
            "id": 2,
            "nome": "Teclado", 
            "descricao": "Teclado mecanico rgb",
            "marca": [
                marcas[5].marca
            ],   
            "qtde": 200,               
            "cor": cor,
            "valor": 150.00 
        },

        {
            "id": 3,
            "nome": "Mouse", 
            "descricao": "Mouse sem fio",
            "marca": [
                        marcas[0].marca,
                        marcas[1].marca,
                        marcas[5].marca
            ]
            , 
            "qtde": 500,            
            "cor": [
                    cor[0],
                    cor[1],
                    cor[4]
            ],
            "valor": 80.00 
        }


    ] 

    
    // Exibe o array de produtos formatado como tabela no console
    // Facilita a visualização de todos os campos e valores
    //console.table(produtos)

    // Percorre o array de cores do primeiro produto (índice 0)
    // Para cada cor, exibe uma mensagem com o nome da cor no console

    produtos.forEach(function(produto){
        console.log(`Produto: ${produto.nome}`)
    })

    produtos.forEach(function(produto))


cadastroDeProdutos()

//criandodadosJSON()

// exibirDados()
// manipularDados()
// let resposta = removerItem('Jheniffer')
// if(resposta){
//     console.log('Item removido com sucesso.')
// }else {
//     console.log('Não foram encontrados itens para ser removido.')
// }
// console.table(listaDeNomes)
//console.log(verificarItem('Jheniffer'))
//console.log(quantidadeDeItens('josé'))
//manipularDados()
//exibirDados()
