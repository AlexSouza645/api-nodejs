// importação do dotenv
import { config } from "dotenv"
// função config 
config()

//  IMPORTAÇÃO do express 
import  express  from "express";
//  const que utiliza express
const app = express()
//  config qual porta nossa aplicação ira rodar
const port = process.env.port || 8000

// um simples route
// "Quando meu aplicativo (app) receber uma requisição HTTP 
// do tipo GET para o caminho raiz (/), execute esta função.
//  Dentro dessa função, receba os detalhes da requisição 
// (req) e tenha a capacidade de enviar uma resposta (res). No final, 
// envie a string 'hello world' de volta para quem fez a requisição."
app.get("/", (req, res) => {
    res.send("hello world")
})

// criar o listen da porta 
 app.listen(port, ()=> console.log(` linstenin on port ${port}!`))