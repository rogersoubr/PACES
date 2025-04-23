import { Router } from "express";
import AnimaisController from "../controllers/Animais.controller.js";


const animais = Router();

animais.get("/", AnimaisController.getAnimais); //vai nessa rota como segundo padrão 1=animais  e 2 =/

animais.post("/cadastra", AnimaisController.colocarAnimais); //vai nessa rota, onde abre o método POST que leva ao método que cria

export default animais; //exporta a instancia de rota