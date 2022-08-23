// o modulo de http do node é bem fracvo, então nas proximas aulas, usamos a framework express

var http = require("http")

// principais comandos

http.createServer(function(res,req){
    req.end("Hello World! Primeiro servidor com node")
}).listen(8988) // cria um servidor http; listen() vai falar em qual porta vai ser usada




console.log("O servidor foi criado")