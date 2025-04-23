//importando o express
import express from "express";

//importando as rotas de animais e outros
import animais from "./routes/Animais.route.js";
import locais from "./routes/Locais.route.js"
import populacoes from "./routes/Populacoes.route.js";

//importando os data
import "./data/Animais.db.js";
import "./data/Locais.db.js";


//instanciando o express
const app = express();

//colocando porta
const PORT = 3000;

app.use(express.json());

//rota padrao em routes para cada array 
app.use("/animais",animais);
app.use("/locais",locais );//vai nessa rota como segundo padrão 1= / e 2 =locais
app.use("/populacoes",populacoes );

//escuta a porta e liga o servidor
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});