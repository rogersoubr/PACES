import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();
import dotenv from 'dotenv';
dotenv.config();

import { animaisBD, populacoesBD } from "./Animais.db.js"
import { locaisBD } from './Locais.db.js';

async function seed() {
    try{
        console.log("inserindo animais...");
        await prisma.animais.createMany({ data: animaisBD });

        console.log("Inserindo populações...");
        await prisma.populacoes.createMany({ data: populacoesBD });

        console.log("inserindo locais...");
        await prisma.locais.createMany({ data: locaisBD });

        console.log("Banco populado com sucesso.");
        await prisma.$disconnect();

    }catch(error){
        console.error("Erro ao popular o banco:", err);
    }finally{
        await prisma.$disconnect();
    }

}

seed();