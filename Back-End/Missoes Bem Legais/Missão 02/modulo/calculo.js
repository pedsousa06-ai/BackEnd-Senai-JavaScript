// ================= TRATAMENTO DE DADOS =================

// Verifica se o campo está vazio
function estaVazio(valor) {
    return valor.trim() === ""
}

// Substitui vírgula por ponto
function substituirVirgula(valor) {
    let valorTratado = valor.replace(",", ".")
    return valorTratado
}

// Verifica se existe mais de um ponto no número
function verificarMultiplosPontos(valor) {
    let contador = 0

    for (let i = 0; i < valor.length; i++) {
        if (valor[i] === ".") {
            contador++
        }
    }

    return contador > 1
}

// Converte para número
function converterNumero(valor) {
    return Number(valor)
}

// Verifica se é um número válido
function numeroValido(numero) {
    return !isNaN(numero)
}

// ================= VALIDAÇÕES =================

// Valida um número completo
function validarNumero(valor) {

    if (estaVazio(valor)) {
        return { erro: true, mensagem: "ERRO: Campo vazio." }
    }

    valor = substituirVirgula(valor)

    if (verificarMultiplosPontos(valor)) {
        return { erro: true, mensagem: "ERRO: Número inválido." }
    }

    let numero = converterNumero(valor)

    if (!numeroValido(numero)) {
        return { erro: true, mensagem: "ERRO: Número inválido." }
    }

    return { erro: false, valor: numero }
}

// Valida os dois números
function validarNumeros(valor1, valor2) {

    let numero1 = validarNumero(valor1)
    if (numero1.erro) return numero1

    let numero2 = validarNumero(valor2)
    if (numero2.erro) return numero2

    return {
        erro: false,
        n1: numero1.valor,
        n2: numero2.valor
    }
}

// Verifica se a operação é válida
function operacaoValida(operacao) {
    let operacoes = ["soma", "subtracao", "multiplicacao", "divisao"]
    return operacoes.includes(operacao)
}

// Valida operação
function validarOperacaoTexto(operacao) {

    operacao = operacao.toLowerCase()

    if (!operacaoValida(operacao)) {
        return { erro: true, mensagem: "ERRO: Operação inválida." }
    }

    return { erro: false, operacao }
}

// ================= OPERAÇÕES =================

function somar(n1, n2) {
    return n1 + n2
}

function subtrair(n1, n2) {
    return n1 - n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

function dividir(n1, n2) {
    if (n2 === 0 || n1 === 0) {
        return false
    }
    return n1 / n2
}

// Escolhe qual operação executar
function executarOperacao(operacao, n1, n2) {

    if (operacao === "soma") {
        return somar(n1, n2)
    }

    if (operacao === "subtracao") {
        return subtrair(n1, n2)
    }

    if (operacao === "multiplicacao") {
        return multiplicar(n1, n2)
    }

    if (operacao === "divisao") {
        return dividir(n1, n2)
    }
}

// Calcula resultado
function calcularResultado(operacao, n1, n2) {

    let resultado = executarOperacao(operacao, n1, n2)

    if (resultado === false) {
        return { erro: true, mensagem: "ERRO: Não é possível dividir por zero." }
    }

    return { erro: false, valor: resultado }
}

// Formata resultado para 2 casas decimais
function formatarResultado(valor) {
    return Number(valor.toFixed(2))
}

// ================= FUNÇÃO PRINCIPAL =================

function processarCalculo(valor1, valor2, operacao) {

    let numeros = validarNumeros(valor1, valor2)
    if (numeros.erro) return numeros

    let op = validarOperacaoTexto(operacao)
    if (op.erro) return op

    let resultado = calcularResultado(op.operacao, numeros.n1, numeros.n2)
    if (resultado.erro) return resultado

    return {
        erro: false,
        valor: formatarResultado(resultado.valor)
    }
}

// ================= EXPORTAÇÃO =================

module.exports = {
    processarCalculo
}