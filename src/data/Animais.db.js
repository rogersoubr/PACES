//Oi corretor(a), vou ser honesto, usei gpt nesta pasta data, mas vou comentar cada linha

import { Animais, Populacoes } from "../models/Animais.model.js";//importando modelo
import { v4 as uuidv4 } from "uuid";//importando id hexa

// BASE DE DADOS ANIMAIS
//o array static que foi criado no modelo vai criar varias instancias
const animaisBase = [
  new Animais(uuidv4(), "Tamanduá-bandeira", "Mamíferos", "Myrmecophagidae", "Terrestre", "Cerrado", 2500, false),
  new Animais(uuidv4(), "Peixe-boi", "Mamíferos", "Trichechidae", "Marinho", "Amazônia", 120, true),
  new Animais(uuidv4(), "Lobo-guará", "Mamíferos", "Canidae", "Terrestre", "Cerrado", 1500, false),
  new Animais(uuidv4(), "Onça-pintada", "Mamíferos", "Felidae", "Terrestre", "Pantanal", 3500, false),
  new Animais(uuidv4(), "Ararinha-azul", "Aves", "Psittacidae", "Terrestre", "Caatinga", 80, true),
];

// Adiciona à lista estática
animaisBase.forEach(animal => Animais.animal.push(animal));



// BASE DE DADOS POPULAÇÕES
const populacoesBase = [
  new Populacoes(uuidv4(), "Tamanduá-bandeira", "João", 45, "Zona rural de Minas Gerais", 3),
  new Populacoes(uuidv4(), "Peixe-boi", "Ana", 33, "Beira do Rio Amazonas", 2),
  new Populacoes(uuidv4(), "Lobo-guará", "Pedro", 29, "Chapada dos Veadeiros, GO", 1),
  new Populacoes(uuidv4(), "Onça-pintada", "Marcos", 52, "Pantanal Sul-mato-grossense", 4),
  new Populacoes(uuidv4(), "Ararinha-azul", "Luciana", 39, "Interior da Bahia", 0),
];

// Adiciona à lista estática
populacoesBase.forEach(p => Populacoes.populacao.push(p));