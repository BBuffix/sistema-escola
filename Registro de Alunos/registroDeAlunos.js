const prompt = require("prompt-sync")({sigint: true})
const fs = require("fs")
//chamada de prompt e de file server

var numerodealunos = receberNumeroDeAlunos()

for (let index = 0; index < array.length; index++) {
    var aluno = { 
        nome: "", 
        idade : 0, 
        notaPrimeiroBimestre: 0.00, 
        notaSegundoBimestre: 0.00, 
        notaTerceiroBimestre: 0.00, 
        notaQuartoBimestre: 0.00}
    aluno.nome = prompt("Insira o nome do aluno: ")
    aluno.idade = receberIdadeDoAluno()

}

function receberIdadeDoAluno(){
    var idadeProvisoria = parseInt(prompt("Insira a idade do aluno: "))
    
    if (verificarNumero(idadeProvisoria))
    {
        return idadeProvisoria
    }
    else
    {
        console.log("Número Inválido")
        receberIdadeDoAluno()
    }

}

function receberNumeroDeAlunos(){
    var numeroDeAlunosLocal = parseInt(prompt("Quantos alunos vão estudar este ano? "))
    
    if (verificarNumero(numeroDeAlunosLocal))
    {
        return numeroDeAlunosLocal
    }
    else
    {
        console.log("Número inválido.")
        receberoNumeroDealunos()
    }
}
//função de chamada para o prompt para requisitar o número de alunos e TENTAR converter em parseInt

function verificarNumero(numeroQueVaiSerVerificado){
    if(typeof(numeroQueVaiSerVerificado) == "number" && numeroQueVaiSerVerificado > 0)
    {
        return true
    }

    return false
}
//função para verificação condicional de número da váriável recebernumerodealunos
//essa segunda função é condicional e dependente da primeira função

