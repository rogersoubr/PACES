import { Router } from "express";
import PopulacoesController from "../controllers/Populacoes.controller";


const populacoes = Router();//instancia de router

populacoes.get("/", PopulacoesController.getPopulacoes.bind(PopulacoesController)); ////vai nessa rota como segundo padrão 1= /produto e 2 =/

populacoes.post("/cadastra", PopulacoesController.colocarPopulacoes.bind(PopulacoesController)); //vai nessa rota, onde abre o método POST que leva ao método que cria

populacoes.post("/:id/adicionar-filho", PopulacoesController.adicionarFilho.bind(PopulacoesController)); //método POST que colocar um filho

export default populacoes; //exporta a intancia de router