/******************************************************************************************************
* Objetivo: Criar um sistema que permite o calculo de juros 
* utilizando boas práticas como funções
* Autor: Pedro
* Data: 11/02/2026
* Versão: 1.0
******************************************************************************************************/
const { log } = require('console')
const readline = require('readline')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question("Digite o nome do cliente: ", function(cliente){
    let nomeCliente = cliente

    entradaDeDados.question("Digite o nome do produto", function(produto){
        let nomeProduto = produto

        entradaDeDados.question("Digite o valor da compra: ", function(ValorCompra){
            let capitalProduto = ValorCompra

            entradaDeDados.question("Digite a taxa de juros a ser aplicada na compra: ", function(taxa){
                let taxaCompra = taxa

                entradaDeDados.question("Digite o tempo para realizar o pagamento: ", function(tempo){
                    let tempoPagamento = tempo


                    //import da Bilioteca que realiza calculos financeiros
                    let calculos = require("./modulo/calculos")
                    
                    let montante = calculos.calcularJurosCompostos(capitalProduto,taxaCompra,tempoPagamento)

                    if(montante){
                        console.log('O montante final é ' + montante.toFixed(2))
                    }else{
                        console.log("ERRO: Devido a problemas no calculo de juros, o rpograma encerrou !!!")
                        entradaDeDados.close()

                    }
                })

            })

        })
    })
})
