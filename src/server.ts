//importando o express
import express from "express";
//importando cors
import cors from "cors";
//importando env
import dotenv from "dotenv";


//importando as rotas de animais e outros
import animais from "./routes/Animais.route.js";
import locais from "./routes/Locais.route.js"
import populacoes from "./routes/Populacoes.route.js";

dotenv.config();

//instanciando o express
const app = express();

//importando os data
import "./prisma/seeds";


//colocando porta
const PORT = process.env.BACKEND_PORT|| 3001;

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use(express.json());

//rota padrao em routes para cada array 
app.use("/animais",animais);
app.use("/locais",locais );//vai nessa rota como segundo padrão 1= / e 2 =locais
app.use("/populacoes",populacoes );

//escuta a porta e liga o servidor
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});