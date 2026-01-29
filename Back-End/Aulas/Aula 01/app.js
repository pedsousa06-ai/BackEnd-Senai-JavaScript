//Comentario em Linha
/*

comentario
    em
bloco
*/

// Imprime no terminal um conteudo
console.log("testando print do console")

var nome = " Pedro " // Permitir criar uma variavel sem um valor definido

console.log(nome) // chama a variavel

//formas de concatenar variaveis e texto
console.log(" o nome do usuario é: " + nome)
console.log(` o nome do usuario é: ${nome}`)

// import da biblioteca para captar entrada de dados via terminal


//cria uma interface de dados para entrada e saida de dados
var entradadeDados = readline.createInterface({
    input: process.stdin,
    output:  process.stdout
})


//funcao para retornar o nome digitado no terminal
    // o metodo question após a digitacao chama a sua funçaõo "CALLBACK"
    //para entregar o que foi digitado no terminal, através do argumento
    //nomeUsuario
entradadeDados.question(" Favor digitar o seu nome: ", function(nomeUsuario){
    //Entrada de dados Para o Email
    entradadeDados.question(" favor digitar o seu e-mail: ",function(emailUsuario){
        console.log(" O nome do usuario é: " + nomeUsuario)
        console.log(` O email do usuario: ${emailUsuario}`)
    entradadeDados.question(" favor digite o seu numero: ",function(NumeroUsuario){
        console.log(" O numero seu é" + NumeroUsuario)
    })
    })

})

