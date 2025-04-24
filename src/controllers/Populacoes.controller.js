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
    //método de adicionar filho do controle de populacao
    async adicionarFilho(req, res){
        const { id } = req.params;//parametro da requisicao
        const { nomeFilho } = req.body;

        
        if (!nomeFilho) {
            return res.status(400).json({ mensagem: "Nome do filho é obrigatório!" });//se for o nome mesmo
        }

        // procura a pai/mae com o id igual
        const individuo = Populacoes.populacao.find(p => p.id === id);//pegar A11 com Dan

        //
        if (!individuo) {
            return res.status(404).json({ mensagem: "População não encontrada!" });
        }

        // adiciona o filho usando o método da classe
        //const mensagem = individuo.adiconaFilho(nomeFilho);

        individuo.filhos.push(nomeFilho);

        return res.status(200).json({
            mensagem: "Filho adicionado",
            filhosAtualizados: individuo.filhos
        });
    }
}

export default new PopulacoesController();//exportando a classe