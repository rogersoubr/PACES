import { Request, Response } from "express";
import prisma from "../prisma/prisma";

class PopulacoesController {

    async getPopulacoes(req: Request, res: Response){
         const todasPopulacoes = await prisma.populacoes.findMany()

        return res.status(200).json({
        message: "mostrando todas as populações",
        populacoes: todasPopulacoes 
      });
    }

    async colocarPopulacoes(req: Request, res: Response){
        const { nomeA, apelido, idade, endereco, filhos } = req.body;

        if (!nomeA || !apelido || idade === undefined || !endereco || filhos === undefined) {
            return res.status(400).json({
                message: "dados incompletos da populacao"
            });
        }

        try{
            const novaPopulacaoColocada = await prisma.populacoes.create({
                data: {
                    nomeA,
                    apelido,
                    idade,
                    endereco,
                    filhos,
                },
            });

            return res.status(201).json({ 
                message: "nova população salva",
                populacao: novaPopulacaoColocada
            });
        }catch(error){
            return res.status(400).json({
                message: "não foi possível salvar a população",
             });
        }

    }

    async adicionarFilho(req: Request, res: Response) {

        const { id } = req.params;
        const { nomeFilho } = req.body;

        if (!nomeFilho || typeof nomeFilho !== 'string') {
            return res.status(400).json({ message: "nome do filho tem que ser uma string" });
        }

        try{
            const populacaoExistente = await prisma.populacoes.findUnique({
                where: { id: id },
            });

            if (!populacaoExistente) {
                return res.status(404).json({ message: "população não foi encontrada" });
            }
            //coloca o filho no array
            const filhosAtualizados = [...populacaoExistente.filhos, nomeFilho];

            //tem que atualizar o registro no banco de dados com o novo array de filhos.
            const populacaoAtualizada = await prisma.populacoes.update({
                    where: { id: id },
                    data: {
                        filhos: filhosAtualizados,
                    },
                });

            return res.status(200).json({
                message: "filho foi adicionado",
                populacaoAtualizada: populacaoAtualizada,
            });

        }catch(error){
            return res.status(500).json({
                message: "Erro interno do servidor ao adicionar filho.",
            });
        }

    }

}
export default new PopulacoesController();