import { Router } from "express";
import PopulacoesController from "../controllers/Populacoes.controller.js";


const populacoes = Router();//instancia de router

populacoes.get("/", PopulacoesController.getPopulacoes); ////vai nessa rota como segundo padrão 1= /produto e 2 =/

populacoes.post("/cadastra", PopulacoesController.colocarPopulacoes); //vai nessa rota, onde abre o método POST que leva ao método que cria

export default populacoes; //exporta a intancia de router