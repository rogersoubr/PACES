import { Router } from "express";
import { colocarAnimais, getAnimais } from "../controllers/Animais.controller";


const animais = Router();

animais.get("/", getAnimais); //vai nessa rota como segundo padrão 1=animais  e 2 =/

animais.post("/cadastra", colocarAnimais); //vai nessa rota, onde abre o método POST que leva ao método que cria

export default animais; //exporta a instancia de rota