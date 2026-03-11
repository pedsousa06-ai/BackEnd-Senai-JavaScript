'use strict'

const readline = require("readline")
const funcoes = require("./Modulo/calcular")

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("\n========= MENU DE EXERCÍCIOS =========")
console.log("1 - IMC")
console.log("2 - Média Escolar")
console.log("3 - Tabuada")
console.log("4 - Fatorial")
console.log("5 - Pares e Ímpares")
console.log("======================================")

entrada.question("Escolha uma opção: ", function(opcao){



// IMC 
if(opcao == 1){

    entrada.question("Digite o peso: ", function(peso){
        entrada.question("Digite a altura: ", function(altura){

            const imc = funcoes.calcularIMC(peso, altura)

            if(imc === false){
                console.log("Dados inválidos.")
            } else {
                const classificacao = funcoes.classificarIMC(imc)
                console.log("IMC:", imc.toFixed(2))
                console.log("Classificação:", classificacao)
            }

            entrada.close()
        })
    })
}



// Média Escolar
else if(opcao == 2){

    entrada.question("Digite o nome do aluno: ", function(nomeAluno){
    
        if(funcoes.estaVazio(nomeAluno)){
            console.log("Erro: O nome do aluno não pode estar vazio.")
            entrada.close()
            return
        }
    
        entrada.question("Digite o nome da disciplina: ", function(disciplina){
    
            if(funcoes.estaVazio(disciplina)){
                console.log("Erro: A disciplina não pode estar vazia.")
                entrada.close()
                return
            }
    
            entrada.question("Digite o nome do curso: ", function(curso){
    
                if(funcoes.estaVazio(curso)){
                    console.log("Erro: O curso não pode estar vazio.")
                    entrada.close()
                    return
                }
    
                entrada.question("Digite o nome do professor: ", function(nomeProfessor){
    
                    if(funcoes.estaVazio(nomeProfessor)){
                        console.log("Erro: O nome do professor não pode estar vazio.")
                        entrada.close()
                        return
                    }

                    // 🔥 ADICIONADO
                    entrada.question("Digite o sexo do professor (M/F): ", function(sexoProfessor){

                        if(funcoes.estaVazio(sexoProfessor)){
                            console.log("Erro: O sexo do professor não pode estar vazio.")
                            entrada.close()
                            return
                        }
    
                        entrada.question("Digite o sexo do aluno (M/F): ", function(sexoAluno){
        
                            if(funcoes.estaVazio(sexoAluno)){
                                console.log("Erro: O sexo não pode estar vazio.")
                                entrada.close()
                                return
                            }

                            // 🔥 ADICIONADO
                            const alunoTexto = funcoes.definirAluno(sexoAluno)
                            const professorTexto = funcoes.definirProfessor(sexoProfessor)
        
                            entrada.question("Digite a primeira nota: ", function(nota1){
        
                                if(funcoes.estaVazio(nota1)){
                                    console.log("Erro: A primeira nota não pode estar vazia.")
                                    entrada.close()
                                    return
                                }
        
                                entrada.question("Digite a segunda nota: ", function(nota2){
        
                                    if(funcoes.estaVazio(nota2)){
                                        console.log("Erro: A segunda nota não pode estar vazia.")
                                        entrada.close()
                                        return
                                    }
        
                                    entrada.question("Digite a terceira nota: ", function(nota3){
        
                                        if(funcoes.estaVazio(nota3)){
                                            console.log("Erro: A terceira nota não pode estar vazia.")
                                            entrada.close()
                                            return
                                        }
        
                                        entrada.question("Digite a quarta nota: ", function(nota4){
        
                                            if(funcoes.estaVazio(nota4)){
                                                console.log("Erro: A quarta nota não pode estar vazia.")
                                                entrada.close()
                                                return
                                            }
        
                                            let media = funcoes.calcularMedia(nota1, nota2, nota3, nota4)
        
                                            if(media === false){
                                                console.log("Erro: Notas inválidas. Digite valores entre 0 e 100.")
                                                entrada.close()
                                                return
                                            }
        
                                            let situacao = ""
                                            let exame = null
                                            let mediaFinal = null
        
                                            if(media >= 70){
                                                situacao = "Aprovado"
        
                                            } else if(media >= 50){
        
                                                entrada.question("Digite a nota do exame: ", function(notaExame){
        
                                                    if(funcoes.estaVazio(notaExame)){
                                                        console.log("Erro: A nota do exame não pode estar vazia.")
                                                        entrada.close()
                                                        return
                                                    }
        
                                                    exame = Number(notaExame)
                                                    mediaFinal = funcoes.calcularMediaExame(media, exame)

                                                    if(mediaFinal === false){
                                                        console.log("Erro: Nota de exame inválida.")
                                                        entrada.close()
                                                        return
                                                    }
        
                                                    if(mediaFinal >= 60){
                                                        situacao = "Aprovado em exame"
                                                    } else {
                                                        situacao = "Reprovado em exame"
                                                    }
        
                                                    console.log("\n" + "*".repeat(15) + " RESULTADO FINAL " + "*".repeat(15))
                                                    console.log(alunoTexto + ":", nomeAluno)
                                                    console.log("Curso:", curso)
                                                    console.log("Disciplina:", disciplina)
                                                    console.log(professorTexto + ":", nomeProfessor)
                                                    console.log("Média:", media.toFixed(2))
                                                    console.log("Nota do Exame:", exame)
                                                    console.log("Média Final:", mediaFinal.toFixed(2))
                                                    console.log("Situação:", situacao)
                                                    console.log("*".repeat(45) + "\n")
        
                                                    entrada.close()
                                                })
                                                return
                                            } else {
                                                situacao = "Reprovado"
                                            }
        
                                            console.log("\n" + "*".repeat(15) + " RESULTADO FINAL " + "*".repeat(15))
                                            console.log(alunoTexto + ":", nomeAluno)
                                            console.log("Curso:", curso)
                                            console.log("Disciplina:", disciplina)
                                            console.log(professorTexto + ":", nomeProfessor)
                                            console.log("Média:", media.toFixed(2))
                                            console.log("Situação:", situacao)
                                            console.log("*".repeat(45) + "\n")
        
                                            entrada.close()
        
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}



// Tabuada
else if(opcao == 3){

    entrada.question("Tabuada inicial: ", function(ti){
        entrada.question("Tabuada final: ", function(tf){
            entrada.question("Contador inicial: ", function(ci){
                entrada.question("Contador final: ", function(cf){

                    const resultado = funcoes.gerarTabuadas(ti, tf, ci, cf)

                    if(resultado === false){
                        console.log("\nErro: Valores inválidos.")
                        console.log("Verifique os limites permitidos.")
                    } 
                    else {

                        console.log("\n" + "*".repeat(15) + " TABUADAS " + "*".repeat(15))
                        console.log("Tabuada inicial:", ti)
                        console.log("Tabuada final:", tf)
                        console.log("Contador inicial:", ci)
                        console.log("Contador final:", cf)
                        console.log("-".repeat(45))

                        console.log(resultado)

                        console.log("*".repeat(45) + "\n")
                    }

                    entrada.close()

                })
            })
        })
    })
}



// Fatorial
else if(opcao == 4){

    entrada.question("Digite um número: ", function(numero){

        const resultado = funcoes.calcularFatorial(numero)

        if(resultado === false){
            console.log("Número inválido.")
        } else {
            console.log("Fatorial:", resultado)
        }

        entrada.close()
    })
}

// Pares e Impares
else if(opcao == 5){

    entrada.question("Número inicial: ", function(inicio){
        entrada.question("Número final: ", function(fim){

            const resultado = funcoes.separarParesImpares(inicio,fim)

            if(resultado === false){
                console.log("Valores inválidos.")
                entrada.close()
                return
            }

            entrada.question("\n1 - Pares\n2 - Ímpares\nEscolha: ", function(tipo){

                if(tipo == 1){

                    console.log("\nPARES:")
                    console.log(resultado.pares)
                    console.log("Quantidade:", resultado.qtdePares)

                    entrada.question("Deseja somar os pares? (S/N): ", function(resp){

                        if(resp.toUpperCase() === "S"){
                            const soma = funcoes.somarLista(resultado.pares)
                            console.log("Soma dos pares:", soma)
                        }

                        entrada.close()
                    })
                }

                else if(tipo == 2){

                    console.log("\nÍMPARES:")
                    console.log(resultado.impares)
                    console.log("Quantidade:", resultado.qtdeImpares)

                    entrada.question("Deseja somar os ímpares? (S/N): ", function(resp){

                        if(resp.toUpperCase() === "S"){
                            const soma = funcoes.somarLista(resultado.impares)
                            console.log("Soma dos ímpares:", soma)
                        }

                        entrada.close()
                    })
                }

                else{
                    console.log("Opção inválida.")
                    entrada.close()
                }

            })

        })
    })
}

else{
    console.log("Opção inválida.")
    entrada.close()
}

})