/**********************************************************************************************************
*Objetivo: calcular medias escolares 
*Data: 29/01/2026
*Autor: Pedro
*Versão: 1.0.1.26
***********************************************************************************************************/

/* 
    Existem 3 forma de criação de variaveis

        var ->      Permite a criação de um espaço na 
                    memória do tipo variavel. foi utlizado muito 
                    em projetos antigos.
                    Recomendação: Caso voce queira utilizar,
                    recomenda-se na criação de variaveis globais.
                    (inicio do código)

        let ->      Permite a criação de um espaco na 
                    memoria do tipo variavel. A utilizacao deste padrão
                    é para a criação dentro de bloco de programação local { }.
                    Essa variavel nasce e morre dentro deste bloco.
                    Não é recomendando a sua ultilizacao em escopo global.
        
        const ->    Permite a criaçaõ de um espaço na memória onde não
                    sofrerá alteração durante o código . A const pode ser ultilizado
                    dentro e fora do bloco { }.
                    Dica: Caso voce queira diferenciar uma const, um var ou um let
                    A const voce pode criar com letras Maiusculas
*/

// Import da biblioteca 
const readline = require("readline")

// Cria o objeto para entrada de dados
const entradadeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de nome
entradadeDados.question(" Digite o seu nome", function(nome){

    //Nome do aluno que foi digitado
let nomeAluno = nome

    //Entrada nota1
    entradadeDados.question(" Digite a nota 1:",function(valor1){
        let nota1 = valor1
        
        //Entrada nota 2
        entradadeDados.question(" Digite a nota Dois: ", function(valor2){
            let nota2 = valor2
            
            //Entrada nota3
            entradadeDados.question(" Digite a nota tres:", function(valor3){
                let nota3 = valor3
                
                //Entrada nota4
                entradadeDados.question(" Digite a nota quatro: ", function(valor4){
                    let nota4 = valor4
                    
                    /*
                    Operadores de comparação:

                    == ->    Permite comparar a igualdade de dois conteudos.
                    > ->     Permite comparar valores menores 
                    < ->     Permite comparar valores menores
                    >= ->    Permirte compara valores maiores ou iguais
                    =< ->    Permirte compara valores menores ou iguais
                    != ->    Permite comparar a diferença entre conteudos
                    === ->   Permite comparar a iguadade de conteudo e
                             aigualdade e tipagem de dados
                    !== ->   Permite comparar a igualdade de conteudo e a
                             diferença de tipos de dados
                    ==! ->  Permite comparar a diferença de conteudos e a 
                             difereça de tipos de dados




                    Operadores Logicos: 

                    E  -> AND -> &&
                    OU -> OR -> ||
                    NAO -> NOT -> !

                    */

                    //Validação de entrada vazia
                    if(nome == '' || nota1 == "" || nota2 =="" || nota3 =="" || nota4==""){
                        console.log(" !!!!! ERRO: é obrigatorio o preenchimento de todos os dados !!!!!! ")
                    //Calcular a media
                    }else if(nota1 <0 || nota2  <0|| nota3<0|| notas4 <0 || 
                        nota1 >100 || nota2  >100|| nota3 >100|| notas4 >100 ){
                            console.log("Erro")}
                    

                    


                })//Fecha nota4
            })//Fecha nota3
        })//Fecha nota2
    })//Fecha nota1
})//Fecha nome