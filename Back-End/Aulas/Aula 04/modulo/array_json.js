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
    
}


manipularDados()
//exibirDados()
