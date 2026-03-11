/****************************************************************************************************
 * Obejtivo: Arquivo responsavel por gerar a tabuada de um numero
 * Data: 25/02/2026
 * Autor: Pedro
 * Versão: 1.0
 ****************************************************************************************************/

//Import da biblioteca de calculos matematicos
const calculosMatematicos = require("./calcular")

//Para imprimir  a tabuada usando while
const gerarTabuada = function(tabuada){
    //Recebe a tabuiada a ser gerada
    let tab = Number(tabuada)
    let cont = 0
    let resultado 

    //repetiçãopara gerar a tabuada até 10
    while(cont <=10){
        //Chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        cont +=1
    }
}

//Para imprimir  a tabuada usando while
const gerarTabuadaFor = function(tabuada){
    //Recebe a tabuiada a ser gerada
    let tab = Number(tabuada)
    //let cont = 0
    let resultado 

    //repetiçãopara gerar a tabuada até 10
    for(let cont = 0; cont <=10; cont++){
        //Chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    }
}
gerarTabuadaFor(2)