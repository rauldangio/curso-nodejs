const express = require("express")
const app = express()


app.get('/', function(req,res){
    res.sendFile('/home/striker/curso-node/aula10-html/frontend/index.html') // envia um arquivo para quem acessar essa rota, o dirname retorna o diretorio da aplicação
    // a função sendFile() envia um arquivo para o objeto resposta
})

app.get('/sobre',function(req,res){
    res.sendFile('/home/striker/curso-node/aula10-html/frontend/sobre.html')
})

app.listen(8081)