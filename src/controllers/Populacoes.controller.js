import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

class PopulacoesController {
    async getPopulacoes(req,res){
        const todasPopulacoes = await prisma.populacoes.findMany();

        res.json({message:"Mostrando todas as populacoes", 
            animal: todasPopulacoes}
        );
    }

    async colocarPopulacoes(req, res){
        const { nomeA, apelido, idade, endereco, filhos } = req.body;

        if ((!nomeA || !apelido || !idade || !endereco || !filhos)){
            return res.status(400).json({
                message:"Está com os dados incorretos"
            });//não estoura erro ainda, só guarda messagem
        }

          if (!Number.isInteger(idade)) {
            return res.status(400).json({ message: "Idade deve ser um número inteiro" });//se idade não for number
          }
          //vai tentar
          try{

            console.log(nomeA, apelido, idade, endereco, filhos);

            const novaPopulacao = await prisma.populacoes.create({
                data: { 
                    nomeA,
                    apelido,
                    idade,
                    endereco,
                    filhos 
                }
            });

            return res.status(201).json({ message: "Nova populacao foi salva", populacao: novaPopulacao});

          }catch(error){

                return res.status(400).json({error});//dando errado, estoura o erro e mensagem
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
        const individuo = await prisma.populacoes.findUnique({ where: { id } });

        //
        if (!individuo) {
            return res.status(404).json({ mensagem: "População não encontrada!" });
        }

        // adiciona o filho usando o método da classe
        //const mensagem = individuo.adiconaFilho(nomeFilho);

        const filhosAtualizados = [...individuo.filhos, nomeFilho];

        const populacaoAtualizada = await prisma.populacoes.update({
            where: { id },
            data: { filhos: filhosAtualizados }
        });

        return res.status(201).json({
            mensagem: "Filho adicionado",
            filhosAtualizados: populacaoAtualizada.filhos
        });
    }
}

export default new PopulacoesController();//exportando a classe