/***************************************************************************************************************
 * Objetivo: Arquivo responsavel poelas funcções de calculo desse projeto
 * Autor: Pedro
 * Data: 11/02/2026
 * Versao: 1.0
 ***************************************************************************************************************/
function calcularJurosCompostos(ValorCompra, taxa , tempoPgto){
    //Recebe cos argumentos da função em variáveis locais
    // As variáveis (valor, taxa e tempo sã numéricos por conta da conversão)
    //Mas os argumentos (valorCompra, Taxa, tempoPgto ainda serã strings)
    //Correção: apenas convertendo, sem redeclarar variável
    ValorCompra = Number(ValorCompra)
    taxa = Number(taxa)
    tempoPgto = Number(tempoPgto)

    //Validação para entradas vazias ou de caracteres invalidos
    if(isNaN(ValorCompra) || isNaN(tempoPgto) || ValorCompra <= 0 || tempoPgto <= 0){
        console.log("ERRO: Valores de compra ou tempo de pagamento estão incorretos !!!")
        return false
    }else{
        //Chama a função para converter o número do percentual
        let percentual = calcularPercentual(taxa)

        //Validaçaõ para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = ValorCompra * ((1+percentual) ** tempoPgto)
            return Number(montante.toFixed(2))
        }else{
            console.log("ERRO: O valor da taxa está incorreto !!!")
            return false
        }
    }
}

//calcula o percentual de um número
function calcularPercentual (numero){
    let numeroPercentual = Number(numero)
    //Validação para verificar se é número válido
    if(numero == '' || numeroPercentual <= 0 || isNaN(numeroPercentual)){
        return false //Não pode processar
    }else{
        //Processamento do cálculo do percentual
        let percentual = numeroPercentual /100
        return Number(percentual.toFixed(2))
    }
}


//Tornando as duas funçoes publicas para esse projeto
module.exports ={
    calcularJurosCompostos,
    calcularPercentual
}