import { Router } from "express";
import LocaisController from "../controllers/Locais.controller.js";


const locais = Router();

locais.get("/", LocaisController.getLocais); //vai nessa rota como segundo padrão 1=locais  e 2 =/

export default locais; //exporta a intancia