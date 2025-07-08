import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

class AnimaisController{
    //async ps encosta no bd
    async getAnimais(req,res){
        const todosAnimais = await prisma.animais.findMany();
        //console.log("Mostrando todos os animais")
        return res.json({message:"Mostrando todos os animais", 
            animal: todosAnimais}
        );
    }

    async colocarAnimais(req, res){
        const { nomeA, classe, familia, ambiente, bioma, exemplares, extincao } = req.body;

        if ((!nomeA || !classe || !familia || !ambiente || !bioma || !exemplares)){
            return res.status(400).json({
                message:"Está com os dados incorretos"
            });//não estoura erro ainda, só guarda messagem
        }

        if (!Number.isInteger(exemplares)) {
            return res.status(400).json({ message: "Exemplares deve ser um número inteiro" });//se exemplares não for number
          }
          //vai tentar
          try{
            //console.log(nomeA, classe, familia, ambiente, bioma, exemplares, extincao);

            const novoAnimal = await prisma.animais.create({
                data: { 
                    nomeA, 
                    classe, 
                    familia, 
                    ambiente, 
                    bioma, 
                    exemplares, 
                    extincao 
                }
            });

            return res.status(201).json({ message: "Animal foi salvo", animal: novoAnimal});

          }catch(error){

                return res.status(500).json({error});//dando errado, estoura o erro e mensagem
          }

    }

}

export default new AnimaisController();//exportando a classe