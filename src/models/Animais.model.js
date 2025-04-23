// CLASSE ANIMAIS
//cria e exporta classe
export class Animais{
    constructor(id,nomeA, classe, familia, ambiente, bioma, exemplares, extincao){
        this.id = id;
        this.nomeA = nomeA;
        this.classe = classe;
        this.familia = familia;
        this.ambiente = ambiente;//marinho ou terrestre
        this.bioma = bioma;
        this.exemplares = exemplares;//vai receber um number
        this.extincao = extincao;//vai receber true ou false
    };

    // array statico para instanciar a classe
    static animal = [];


    salvarAnimal(animal){
        Animais.animal.push(animal);
    }
};


// CLASSE POPULACAO
//cria e exporta classe
//tentar fazer com heranca
export class Populacoes {
    constructor(id,nomeA, nome, idade, endereco, filhos){
        this.id = id;
        this.nomeA = nomeA;
        this.nome = nome;//vai receber apelido 
        this.idade = idade;
        this.endereco = endereco;
        this.filhos = filhos;
    };

    // array statico para instanciar a classe
    static populacao = [];



    salvarPopulacaoAnimal(pAnimal){
        Populacoes.populacao.push(pAnimal);
    }
};

