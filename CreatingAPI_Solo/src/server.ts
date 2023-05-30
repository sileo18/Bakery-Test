import  express  from "express";
import { routes } from "./routes"
// import bodyParser from "body-parser";

const bodyParser = require('body-parser')
const app = express() ;
const cors = require('cors');
const port = 3333 ;

const corsOptions = {
  origin: true, //Permite acesso de qualquer endereço frontend
  optionsSuccessStatus: 200, //Status quando a req for bem suscedida
};

app.use(cors(corsOptions));

app.use(bodyParser.json()) //Lê requisições em JSON vindas do frontend
app.use(bodyParser.urlencoded({extends: false})) //Lê parametros via URL

app.use(routes)

app.get('/', (req, res) => {
  res.send('Ok')
})

//Req - Dados da Requisição | Token, Parametros, Etc |
//Res - Enviar Respostas para o usuários

app.listen(port, () => {
  console.log("Server Rodando 🚀")
})