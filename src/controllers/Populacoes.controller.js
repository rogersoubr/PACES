import { Animais, Populacoes } from "../models/Animais.model.js";

import { v4 as uuidv4 } from "uuid";

class PopulacoesController {
    getPopulacoes(req,res){
        console.log("Mostando o controle de todas as populacões");
        res.json({
            populacao: Populacoes.populacao}
        );
    }

    async colocarPopulacoes(req, res){
        const { nomeA, nome, idade, endereco, filhos } = req.body;

        if ((!nomeA || !nome || !idade || !endereco || !filhos)){
            res.json({
                message:"Está com os dados incorretos"
            });//não estoura erro ainda, só guarda messagem
        }

        if (!Number.isInteger(filhos)) {
            res.json({ message: "Filhos deve ser um número inteiro" });//se filhos não for number
          }
          if (!Number.isInteger(idade)) {
            res.json({ message: "Idade deve ser um número inteiro" });//se idade não for number
          }
          //vai tentar
          try{

            console.log(nomeA, nome, idade, endereco, filhos);

            const novaPopulacao = new Populacoes(uuidv4(),nomeA, nome, idade, endereco, filhos); //instancia a classe
    
            novaPopulacao.salvarPopulacaoAnimal(novaPopulacao);//q maluco

            res.json({ message: "Novo Animal foi salvo", populacao: novaPopulacao});

          }catch(error){

                res.status(400).json({error});//dando errado, estoura o erro e mensagem
          }

    }

}

export default new PopulacoesController();//exportando a classe