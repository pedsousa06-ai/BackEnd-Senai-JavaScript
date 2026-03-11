const readline = require('readline')
const funcoes = require('./modulo/calculo')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicita o primeiro número ao usuário
entradaDeDados.question("Digite o primeiro número: ", function(valor1){

    //Solicita o segundo número ao usuário
    entradaDeDados.question("Digite o segundo número: ", function(valor2){

        //Solicita a operação desejada
        entradaDeDados.question("Digite a operação (soma, subtracao, multiplicacao, divisao): ", function(operacao){

            //Chama a função principal responsável por todo o processamento
            let resultado = funcoes.processarCalculo(valor1, valor2, operacao)

            //Exibe apenas o resultado final
            if(resultado.erro){
                console.log(resultado.mensagem)
            }else{
                console.log("Resultado final:", resultado.valor)
            }

            entradaDeDados.close()
        })
    })
})