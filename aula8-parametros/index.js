const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.send("Bem vindo a pagina inicial")
})

app.get("/programas",function(req,res){
    res.send("Bem vindo aos programas")
})

app.get("/sobre",function(req,res){
    res.send("Bem vindo ao sobre")
})

app.get("/ola/:cargo/:nome",function(req,res){ // os dois pontos no caminho é o parametro, o parametro é um valor interativo que o usuario pode colocar
     // res.send(req.params) // req.params mostra os parametros da solicitação
    // o objeto req é o cara que recebe os dados da requisão http, inclusive parametros
    res.send(`<h1>Ola ${req.params.nome}</h1> <h2> Seu cargo é ${req.params.cargo}</h2>`); // req = objeto que armazena todos os valores da requisão, params os parametros, e o nome é o parametro nome.
    // res.send(`<h2> Seu cargo é ${req.params.cargo}</h2>`) // vai dar erro pq o send() so pode ser usado uma vez
})

app.listen(8081,function(){
    console.log("O servidor esta rodando na url http://localhost:8081")
})