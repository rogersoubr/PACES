import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

class LocaisController{
    async getLocais(req,res){
        const todosLocais = await prisma.locais.findMany();
        return res.json({message:"Mostrando todos os locais", 
            animal: todosLocais}
        );
    }

}

export default new LocaisController();//exportando a classe