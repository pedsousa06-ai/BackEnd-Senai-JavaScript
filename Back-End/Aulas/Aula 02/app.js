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
entradadeDados.question(" Digite o seu nome: ", function(nome){

    //Nome do aluno que foi digitado
let nomeAluno = nome

    //Entrada nota1
    entradadeDados.question(" Digite a nota um: ",function(valor1){
        let nota1 = valor1
        
        //Entrada nota 2
        entradadeDados.question(" Digite a nota Dois: ", function(valor2){
            let nota2 = valor2
            
            //Entrada nota3
            entradadeDados.question(" Digite a nota tres: ", function(valor3){
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
                    }else if(nota1 <0 || nota2  <0|| nota3<0|| nota4 <0 || 
                        nota1 >100 || nota2  >100|| nota3 >100|| nota4 >100 ){
                        console.log("Erro Somente é permitindo a entrada de valores entre 0 e 100")}
                    
                    //VAlidação para entrada de letras nas notas
                    //isNan() -> permite validar se o conteudo da 
                        // variavel tem algum caracter ao invés de um numero

                    else if (isNaN(nota1)== true || isNaN(nota2)==true|| isNaN(nota3)==true ||isNaN(nota4)==true){
                        console.log(" Erro: não é possivel calcular a média com a entrada de letras da média dos alunos !!!!! ")
                    } 
                    /*
                        Conversoes de tipos de dados
                            parseInt() -> Permite converter uma String para um numero INTEIRO
                            parseFloat() -> Permite conbverter uma String para numero DECIMAL
                            Number() -> Permite converter uma string para NUMERO (INTEIRO OU DECIMAL)
                            string() -> Permite convberter um conteudo para STRING
                            Boolean() -> Permite converter em um conteudo BOOLEANO
                        typeof() -> Permite verificar o tipo de dados em uma variavel
                        tofixed() -> Permite fixar a quantidade de casas decimais
                    */
                    else {
                        let statusAluno 
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        console.log(` O aluno(o)${nome} ficou com a média de ${media.toFixed(2)}`)

                        // VAlidação do Status de aprovação do aluno
                        if(media <50){
                            statusAluno = "REPROVADO"
                        }
                        else if(media >=50 && media <70 ){
                            statusAluno = "RECUPERAÇÃO"
                        }
                        else if(media >=70 && media <90){
                            statusAluno = "APROVADO"
                        }
                        else if(media >=90 && media <=100){
                            statusAluno = "APROVADO COM EXITO"
                        }//fecha o validação  
                        
                        //Validação do Status de aprovação do aluno f
                        console.log(`O Aluno ${nome} \nMédia final: ${media}\nStatus do Aluno: ${statusAluno}`)
                    }//fecha media 
                })//Fecha nota4
            })//Fecha nota3
        })//Fecha nota2
    })//Fecha nota1
})//Fecha nome