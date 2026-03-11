/***********************************************************************************************************************
 * Obetivo: Arquivo rsponsavel pelas funções de calcular (somar , subtrair , multiplicar e dividir)
 * Data: 20/02/2026
 * Autor: Pedro
 * Versão: 1.0
 * ********************************************************************************************************************/

//Modelos de função anonima
//Calcular as 4 operações matematicas
const calcular = function(n1, n2, operador) {

    let valor1 = Number(n1)
    let valor2 = Number(n2)
    

    let operadorMatematico = String(operador).toLocaleUpperCase()
    let resultado = false

    // Condicionais para validar qual o tipo de operação matemática
    //a ausencia das { } nas condicionais é porque qualquer condicional que tenha apenas uma linha
    //de processamento a { } torna-se opcional
    //Processamento

    if (operadorMatematico == "SOMAR" )
        resultado = somar(n1,n2)

    else if (operadorMatematico == "SUBTRAIR" )
        resultado = subtrair(n1,n2)

    else if (operadorMatematico == "MULTIPLICAR")
        resultado = multiplicar(n1,n2)

    else if (operadorMatematico == "DIVIDIR")
        resultado = dividir(n1,n2)

    return resultado
}

// Função para validar os dados
const validarDados = function (n1, n2) {
    if (n1 == '' || isNaN(n1) || n2 == '' || isNaN(n2)) {
        return false
    } else {
        return true
    }
}
//Exemplo de funções baseadas em SETA (Arrow Fuction)
//Funções para realizar as operações matemáticas
const somar = (n1,n2) => Number(n1) + Number(n2)            
const subtrair = (n1,n2) => Number(n1) - Number(n2)
const multiplicar= (n1,n2) => Number(n1) * Number(n2)
const dividir = (n1,n2) => Number(n1) / Number(n2)


module.exports = {
    somar,
    calcular,
    multiplicar,
    subtrair,
    dividir,
    validarDados
}