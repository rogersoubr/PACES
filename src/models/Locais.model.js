import { writeFile, readFile } from "fs/promises";

//CLASSE ONGS
//cria e exporta classe
export class Locais{
    constructor(id,nome, proposito, endereco){
        this.id = id;
        this.nome = nome;
        this.proposito = proposito;
        this.endereco = endereco;
    };

    // array statico para instanciar a classe
    static local = [];

    //salva local, vai que
    salvarLocal(local){
        Locais.local.push(local);
    }

};