import prisma from "../prisma/prisma"; // Ajuste o caminho conforme necessário
import { Request, Response } from 'express';



  export async function getAnimais(req: Request, res: Response) {
    try {
      const todosAnimais = await prisma.animais.findMany();
      return res.status(200).json({
        message: "Mostrando todos os animais",
        animais: todosAnimais
      });
    } catch (error) {
      console.error("Erro ao buscar animais:", error);
      return res.status(500).json({
        message: "Erro interno do servidor ao buscar animais",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  }

  export async function colocarAnimais(req: Request, res: Response) {
    const { nomeA, classe, familia, ambiente, bioma, exemplares, extincao } = req.body;

    if (!nomeA || !classe || !familia || !ambiente || !bioma || exemplares === undefined || extincao === undefined) {
      return res.status(400).json({
        message: "Dados incompletos. Por favor, forneça todos os campos obrigatórios: nomeA, classe, familia, ambiente, bioma, exemplares, extincao."
      });
    }

    if (!Number.isInteger(exemplares)) {
      return res.status(400).json({
        message: "Exemplares deve ser um número inteiro."
      });
    }

    if (typeof extincao !== 'boolean') {
        return res.status(400).json({
            message: "Extincao deve ser um valor booleano (true ou false)."
        });
    }

    try {
      console.log("Tentando salvar novo animal com os dados:", { nomeA, classe, familia, ambiente, bioma, exemplares, extincao });

      const novoAnimalCriado = await prisma.animais.create({
        data: {
          nomeA,
          classe,
          familia,
          ambiente,
          bioma,
          exemplares,
          extincao,
        },
      });

      return res.status(201).json({
        message: "Animal foi salvo com sucesso!",
        animal: novoAnimalCriado
      });

    } catch (error) {
      console.error("Erro ao salvar animal:", error);
      return res.status(400).json({
        message: "Não foi possível salvar o animal.",
        error: error instanceof Error ? error.message : "Erro desconhecido ao salvar o animal."
      });
    }
  }


