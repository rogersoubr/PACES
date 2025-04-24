import { Animais, Populacoes } from "../models/Animais.model.js";//importando modelo
import { v4 as uuidv4 } from "uuid";//importando id hexa


// BASE DE DADOS ANIMAIS

//é um array com objetos de animais
const animaisBase = [

  new Animais(uuidv4(), "Tamanduá-bandeira", "Mamíferos", "Myrmecophagidae", "Terrestre", "Cerrado", 2500, false),

  new Animais(uuidv4(), "Peixe-boi", "Mamíferos", "Trichechidae", "Marinho", "Amazônia", 120, true),

  new Animais(uuidv4(), "Lobo-guará", "Mamíferos", "Canidae", "Terrestre", "Cerrado", 1500, false),

  new Animais(uuidv4(), "Onça-pintada", "Mamíferos", "Felidae", "Terrestre", "Pantanal", 3500, false),

  new Animais(uuidv4(), "Ararinha-azul", "Aves", "Psittacidae", "Terrestre", "Caatinga", 80, true),
];

// adiciona a lista estática
animaisBase.forEach(animal => Animais.animal.push(animal));
//forEach percorre cada objeto animal desse array animaisBase
//para cada animal ele faz Animais.animal.push(animal), vulgo, insere o animal dentro do array estatic da classe Animais



// BASE DE DADOS POPULAÇÕES
const populacoesBase = [
  new Populacoes(uuidv4(), "Tamanduá-bandeira", "João", 45, "Zona rural de Minas Gerais", ["Carlos", "Mariana", "Júlia"]),
  new Populacoes(uuidv4(), "Peixe-boi", "Ana", 33, "Beira do Rio Amazonas", ["Miguel", "Sofia"]),
  new Populacoes(uuidv4(), "Lobo-guará", "Pedro", 29, "Chapada dos Veadeiros, GO", ["Felipe"]),
  new Populacoes(uuidv4(), "Onça-pintada", "Marcos", 52, "Pantanal Sul-mato-grossense", ["Rafael", "Laura", "Bruna", "Caio"]),
  new Populacoes(uuidv4(), "Ararinha-azul", "Luciana", 39, "Interior da Bahia", []),
];


// adiciona a lista estática
populacoesBase.forEach(p => Populacoes.populacao.push(p));