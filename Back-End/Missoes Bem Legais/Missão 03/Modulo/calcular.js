/******************************************************************************************************************************
 * Funções usadas para exercícios
 * Data: 27/02/2026
 * Autor: Pedro
 * Versão: 2.2 (Todas as funções como const)
 *****************************************************************************************************************************/

//Validacoes
const estaVazio = function(valor) {
    if (!valor || String(valor).trim() === "") {
        return true
    } else {
        return false
    }
}

const validarNumero = function(valor) {
    if (estaVazio(valor)) {
        return false
    }
    const numero = Number(String(valor).replace(",", "."))
    if (isNaN(numero)) {
        return false
    } else {
        return numero
    }
}

//2. EXERCÍCIO 01 - IMC

const calcularIMC = function(peso, altura) {
    const pesoNum = validarNumero(peso)
    const alturaNum = validarNumero(altura)

    if (pesoNum === false || alturaNum === false || pesoNum <= 0 || alturaNum <= 0) {
        return false
    }

    const imc = pesoNum / (alturaNum * alturaNum)
    return imc
}

const classificarIMC = function(imc) {
    if (imc === false || imc === undefined) {
        return "Dados inválidos"
    }

    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc <= 24.9) {
        return "Peso ideal"
    } else if (imc <= 29.9) {
        return "Acima do peso"
    } else if (imc <= 34.9) {
        return "Obesidade I"
    } else if (imc <= 39.9) {
        return "Obesidade II"
    } else {
        return "Obesidade III"
    }
}


//3. EXERCÍCIO 02 - MÉDIA ESCOLAR

const calcularMedia = function(n1, n2, n3, n4) {
    const nota1 = validarNumero(n1)
    const nota2 = validarNumero(n2)
    const nota3 = validarNumero(n3)
    const nota4 = validarNumero(n4)

    if (nota1 === false || nota2 === false || nota3 === false || nota4 === false) {
        return false
    }
    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        return false
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4
    return media
}

const calcularMediaExame = function(media, notaExame) {
    const exame = validarNumero(notaExame)
    if (exame === false || exame < 0 || exame > 100) {
        return false
    }

    const mediaFinal = (media + exame) / 2
    return mediaFinal
}

const definirProfessor = function(sexo){

    if(estaVazio(sexo)) return "professor"

    const s = sexo.trim().toLowerCase()

    if(s === "f"){
        return "professora"
    } else {
        return "professor"
    }
}

const definirAluno = function(sexo){

    if(estaVazio(sexo)) return "aluno"

    const s = sexo.trim().toLowerCase()

    if(s === "f"){
        return "aluna"
    } else {
        return "aluno"
    }
}


//4. EXERCÍCIO 03 - TABUADA

const gerarTabuadas = function(tInicial, tFinal, cInicial, cFinal) {
    const tabInicial = validarNumero(tInicial)
    const tabFinal = validarNumero(tFinal)
    const contInicial = validarNumero(cInicial)
    const contFinal = validarNumero(cFinal)

    if (tabInicial === false || tabFinal === false || contInicial === false || contFinal === false) {
        return false
    }
    if (tabInicial < 2 || tabFinal > 100) {
        return false
    }
    if (contInicial < 0 || contFinal > 50) {
        return false
    }
    if (tabInicial > tabFinal || contInicial > contFinal) {
        return false
    }

    let resultado = ""
    for (let t = tabInicial; t <= tabFinal; t++) {
        resultado += "\nTabuada do " + t + "\n"
        for (let c = contInicial; c <= contFinal; c++) {
            resultado += t + " x " + c + " = " + (t * c) + "\n"
        }
    }
    return resultado
}


//5. EXERCÍCIO 04 - FATORIAL

const calcularFatorial = function(numero) {
    const n = validarNumero(numero)
    if (n === false || n < 0) return false
    if (n === 0) return 1

    let resultado = 1
    for (let i = n; i >= 1; i--) {
        resultado *= i
    }
    return resultado
}


//6. EXERCÍCIO 05 - PARES E ÍMPARES

const separarParesImpares = function(inicio, fim){

    const numInicial = validarNumero(inicio)
    const numFinal = validarNumero(fim)

    if (numInicial === false || numFinal === false) return false
    if (numInicial >= numFinal) return false
    if (numInicial < 0 || numFinal > 1000) return false

    let pares = ""
    let impares = ""
    let qtdePares = 0
    let qtdeImpares = 0

    for (let i = numInicial; i <= numFinal; i++) {
        if (i % 2 === 0) {
            pares += i + "\n"
            qtdePares++
        } else {
            impares += i + "\n"
            qtdeImpares++
        }
    }

    return {
        pares,
        impares,
        qtdePares,
        qtdeImpares
    }
}

const somarLista = function(lista) {

    if (!lista) return 0

    const numeros = lista.trim().split("\n")

    let soma = 0

    for (let i = 0; i < numeros.length; i++) {

        const numero = Number(numeros[i])

        if (!isNaN(numero)) {
            soma += numero
        }
    }

    return soma
}



module.exports = {
    estaVazio,
    validarNumero,
    calcularIMC,
    classificarIMC,
    calcularMedia,
    calcularMediaExame,
    definirAluno,
    definirProfessor,
    gerarTabuadas,
    calcularFatorial,
    separarParesImpares,
    somarLista
}