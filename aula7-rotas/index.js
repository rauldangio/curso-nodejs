const express = require("express") // importando o modulo express
const app = express(); // a função express cria uma instancia(uma cópia) da framework inteira


app.get("/",function(req,res){
    res.send("Funcionando") // res é o objeto que sera usado para enviar mensagens, ou arquivos (como arquivos .html), e a funcao send() envia para mensagens para o objeto res
})

app.get("/configuracoes",function(req,res){
    res.send("Voce esta nas configurações")
})

app.get("/configuracoes/personalizando", function(req,res){
    res.send("configurando as personalizacnados")
})

/*
criando a primeira rota

no caminho "/", ou seja no inicio no projeto, colocamos uma função de callback 
que tem dois parametros, req (requisição) e res(resposta), e na resposta enviamos a mensagem "funcionando"

*/


app.listen(8062, function(){
    console.log("Servidor Sendo executado no url http://localhost:8062")
}) // tem que ser a ultima linha do codigo
// criando um servidor na porta 8062
/* 
    criando a função de callback
    função de callback é uma função que sera executada quando algum evento acontecer
    ou seja, quando a função listen ser executada ela ira disparar um evento
    e apartir desse evento sera usada a função de callback
    basicamente:
    quando a função listen é disparada ela fala: "ah node, ta rodando aqui", e apartir desse evento a função callback sera usada
*/
