import { Request, Response } from "express";
import prisma from "../prisma/prisma";

class LocaisController {
  async getLocais(req: Request, res: Response) {
    try {
      const locais = await prisma.locais.findMany();
      return res.status(200).json({ message: "lista de locais", locais });
    } catch (error) {
      return res.status(500).json({ message: "erro ao buscar locais" });
    }
  }
}
export default new LocaisController();
