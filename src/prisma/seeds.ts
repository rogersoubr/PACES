import prisma from "./prisma";
//ANIMAIS
const animaisBD = [
  {
    nomeA: "Tamanduá-bandeira",
    classe: "Mamífero",
    familia: "Myrmecophagidae",
    ambiente: "Terrestre",
    bioma: "Cerrado",
    exemplares: 2500,
    extincao: false,
  },
  {
    nomeA: "Peixe-boi",
    classe: "Mamífero",
    familia: "Trichechidae",
    ambiente: "Marinho",
    bioma: "Amazônia",
    exemplares: 120,
    extincao: true,
  },
  {
    nomeA: "Lobo-guará",
    classe: "Mamífero",
    familia: "Canidae",
    ambiente: "Terrestre",
    bioma: "Cerrado",
    exemplares: 1500,
    extincao: false,
  },
  {
    nomeA: "Onça-pintada",
    classe: "Mamífero",
    familia: "Felidae",
    ambiente: "Terrestre",
    bioma: "Pantanal",
    exemplares: 3500,
    extincao: false,
  },
  {
    nomeA: "Ararinha-azul",
    classe: "Aves",
    familia: "Psittacidae",
    ambiente: "Terrestre",
    bioma: "Caatinga",
    exemplares: 80,
    extincao: true,
  },
];
//POPULACOES
const populacoesBD = [
  {
    nomeA: "Tamanduá-bandeira",
    apelido: "João",
    idade: "45", // Idade como string, conforme seu modelo Prisma
    endereco: "Zona rural de Minas Gerais",
    filhos: ["Carlos", "Mariana", "Júlia"],
  },
  {
    nomeA: "Peixe-boi",
    apelido: "Ana",
    idade: "33",
    endereco: "Beira do Rio Amazonas",
    filhos: ["Miguel", "Sofia"],
  },
  {
    nomeA: "Lobo-guará",
    apelido: "Pedro",
    idade: "29",
    endereco: "Chapada dos Veadeiros, GO",
    filhos: ["Felipe"],
  },
  {
    nomeA: "Onça-pintada",
    apelido: "Marcos",
    idade: "52",
    endereco: "Pantanal Sul-mato-grossense",
    filhos: ["Rafael", "Laura", "Bruna", "Caio"],
  },
  {
    nomeA: "Ararinha-azul",
    apelido: "Luciana",
    idade: "39",
    endereco: "Interior da Bahia",
    filhos: [],
  },
];
//LOCAIS
const locaisBD = [
  {
    nome: "Projeto Tamar",
    proposito: "Preservação de tartarugas marinhas",
    endereco: "Praia do Forte, BA",
  },
  {
    nome: "Instituto Onça Pintada",
    proposito: "Conservação de felinos brasileiros",
    endereco: "Goiás, GO",
  },
  {
    nome: "SOS Mata Atlântica",
    proposito: "Preservação da Mata Atlântica",
    endereco: "São Paulo, SP",
  },
  {
    nome: "WWF Brasil",
    proposito: "Conservação da biodiversidade",
    endereco: "Brasília, DF",
  },
  {
    nome: "Instituto Arara Azul",
    proposito: "Proteção de aves em extinção",
    endereco: "Campo Grande, MS",
  },
];

async function main() {
    //tentar, pra minimizar os erros
    try{
        //todos animais
        const resultadoAnimaisBD = await prisma.animais.createMany({
            data: animaisBD,
        });
        //todos pop
        const resultadoPopulacoesBD = await prisma.populacoes.createMany({
            data: populacoesBD,
        })

        //todos locais
        const resultadoLocaisBD = await prisma.locais.createMany({
            data: locaisBD,
        })
        console.log("Sucesso ao colocar no BD");

    }catch(error){
        console.log("Erro ao colocar os dados mocados")

    }finally{
        await prisma.$disconnect();//fechar conexao com prisma
    }
}

main();//ativa/manda a main