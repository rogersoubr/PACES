import { Locais } from "../models/Locais.model.js";
import { v4 as uuidv4 } from "uuid";

// Dados de exemplo
const locaisBase = [
  new Locais(uuidv4(), "Projeto Tamar", "Preservação de tartarugas marinhas", "Praia do Forte, BA"),
  new Locais(uuidv4(), "Instituto Onça Pintada", "Conservação de felinos brasileiros", "Goiás, GO"),
  new Locais(uuidv4(), "SOS Mata Atlântica", "Preservação da Mata Atlântica", "São Paulo, SP"),
  new Locais(uuidv4(), "WWF Brasil", "Conservação da biodiversidade", "Brasília, DF"),
  new Locais(uuidv4(), "Instituto Arara Azul", "Proteção de aves em extinção", "Campo Grande, MS"),
];

// Popular a base estática
locaisBase.forEach(local => Locais.local.push(local));