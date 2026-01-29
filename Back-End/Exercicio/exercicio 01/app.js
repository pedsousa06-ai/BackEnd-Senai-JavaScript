//Import da biblioteca 
var readline = require("readline")

//Criação do obejto para entrada de dados
var entradadeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome 
entradadeDados.question("Favor digitar o seu nome: ", function (nomeUsuario) {
    entradadeDados.question("Digite o primeiro valor: ", function (N1) {
            //Entrada de dados do valor1
        entradadeDados.question("Digite o segundo valor: ", function (N2) {
                //Entrada de dados do valor2
            entradadeDados.question("Digite o terceiro valor: ", function (N3) {
                    //Entrada de dados do valor3

                //Variavel para fazer a soma sempre usar o Number
                var soma = Number(N1) + Number(N2) + Number(N3)

                //Mostrar o nome e a soma ao usuario
                console.log(
                    "O seu nome é " + nomeUsuario + 
                    " e o valor da soma é: " + soma
                )

            })//Fecha o valor3

        })//Fecha o valor2

    })//Fecha o valor1

})//Fecha o nome
