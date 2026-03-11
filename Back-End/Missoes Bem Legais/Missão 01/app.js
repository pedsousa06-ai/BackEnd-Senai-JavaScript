/*******************************************************************************************

Autor: Pedro 
Versão: 1.0
Data: 06/02/2026

*******************************************************************************************/
// Import da biblioteca readline
const readline = require("readline")

// Cria o objeto para entrada e saída de dados
const entradadeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Nome da empresa
const nomeEmpresa = "Viva Moda"

// Entrada do nome do cliente
entradadeDados.question("Digite o seu nome: ", function (nomeCliente) {
  let nome = nomeCliente

  // Entrada do nome do produto
  entradadeDados.question("Digite o nome do produto: ", function (nomeProduto) {
    let produto = nomeProduto

    // Entrada do valor da compra
    entradadeDados.question("Insira o valor da sua compra: ", function (valorCompra) {
      let valorC = valorCompra

      // Entrada da taxa de juros
      entradadeDados.question("Digite a taxa de juros: ", function (taxaDeJuros) {
        let taxa = taxaDeJuros
        
        // Entrada do tempo de pagamento
        entradadeDados.question("Digite o tempo de pagamento: ", function (tempoPagamento) {
          let tempoP = tempoPagamento

          // Escolha se o tempo informado está em meses ou anos
          entradadeDados.question(
            "O tempo informado está em: 1-> Meses | 2-> Anos: ",
            function (tipoTempo) {

              let tipo = tipoTempo

              // Validação para campos obrigatórios
              if (nome == "" || produto == "" || valorC == "" || taxa == "" || tempoP == "" || tipo == "") {
                console.log("!!!!! ERRO: é obrigatório preencher todos os dados !!!!!")
                entradadeDados.close()
                return
              }

              // Validação para não permitir letras nos campos numéricos
              else if (
                isNaN(valorC) == true ||
                isNaN(taxa) == true ||
                isNaN(tempoP) == true ||
                isNaN(tipo) == true
              ) {
                console.log("!!!!! ERRO: não é permitido digitar letras nos campos numéricos !!!!!")
                entradadeDados.close()
                return
              }

              // Conversão dos valores para tipo Number
              valorC = Number(valorC)
              taxa = Number(taxa)
              tempoP = Number(tempoP)
              tipo = Number(tipo)

              // Validação dos valores numéricos
              if (valorC <= 0) {
                console.log("!!!!! ERRO: o valor da compra deve ser maior que zero !!!!!")
                entradadeDados.close()
                return
              } else if (taxa < 0) {
                console.log("!!!!! ERRO: a taxa de juros não pode ser negativa !!!!!")
                entradadeDados.close()
                return
              } else if (tempoP <= 0) {
                console.log("!!!!! ERRO: o tempo deve ser maior que zero !!!!!")
                entradadeDados.close()
                return
              } else if (tipo != 1 && tipo != 2) {
                console.log("!!!!! ERRO: escolha 1 para Meses ou 2 para Anos !!!!!")
                entradadeDados.close()
                return
              }

              // Caso o tempo seja informado em anos, converte para meses
              if (tipo == 2) {
                tempoP = tempoP * 12
              }

              // Converte a taxa de juros de porcentagem para decimal
              let decimal = taxa / 100

              // Cálculo do montante utilizando juros compostos
              let montante = valorC * Math.pow(1 + decimal, tempoP)

              // Cálculo do acréscimo total
              let acrescimo = montante - valorC

              //Painel de informações - SAIDA DE INFORMAÇÕES//  
            
              console.log("******************* [" + nomeEmpresa + "] *******************")
              console.log("")
              console.log("Muito obrigado por realizar a sua compra conosco Sr(a) " + nome)
              console.log("A compra do produto " + produto + ", tem um valor de: R$ " + valorC.toFixed(2))
              console.log("A sua compra será parcelada em " + tempoP + " vezes e o Sr(a) pagará: R$ " + montante.toFixed(2))
              console.log("O acréscimo realizado ao valor de: R$ " + valorC.toFixed(2) + " será de R$ " + acrescimo.toFixed(2))
              console.log("")
              console.log("Muito obrigado por escolher a [" + nomeEmpresa + "].")
              console.log("***************************************************************")

              // Finaliza a entrada de dados
              entradadeDados.close()
            }
          )
        })
      })
    })
  })
})
