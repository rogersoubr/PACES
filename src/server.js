//importando o express
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

// Configura variáveis de ambiente
dotenv.config();

//instanciando o express
const app = express();
//colocando porta
const PORT = process.env.BACKEND_PORT || 3000;

// CORS configurado
const cors_config = { 
    origin: process.env.FRONTEND_URL,
    credentials: true,
};

app.use(cors(cors_config));

app.use(express.json());


//importando as rotas de animais e outros
import animais from "./routes/Animais.route.js";
import locais from "./routes/Locais.route.js"
import populacoes from "./routes/Populacoes.route.js";

//importando os data
//import "./data/Animais.db.js";
//import "./data/Locais.db.js";


//rota padrao em routes para cada array 
app.use("/animais",animais);
app.use("/locais",locais );//vai nessa rota como segundo padrão 1= / e 2 =locais
app.use("/populacoes",populacoes );

//escuta a porta e liga o servidor
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});