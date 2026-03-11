/***********************************************************************************************************************
 * Objetivo: Arquivo responsável pelas entradas e saidas de dados da aplicação
 * Data: 20/02/2026
 * Autor: Pedro
 * Versão: 1.0
 * ********************************************************************************************************************/

//Import da bibilioteca para cálculos 
const calculosMatematicos = require("./módulo/calcular")

let resposta = calculosMatematicos.calcular(10, 20, "somar")

console.log(resposta)