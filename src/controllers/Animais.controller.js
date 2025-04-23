import {Animais} from "../models/Animais.model.js";
//import {Locais} from "../models/Locais.model.js";
import { v4 as uuidv4 } from "uuid";

class AnimaisController{
    getAnimais(req,res){
        //console.log("Mostrando todos os animais")
        res.json({message:"Mostrando todos os animais", 
            animal: Animais.animal}
        );
    }

    async colocarAnimais(req, res){
        const { nomeA, classe, familia, ambiente, bioma, exemplares, extincao } = req.body;

        if ((!nomeA || !classe || !familia || !ambiente || !bioma || !exemplares)){
            res.json({
                message:"Está com os dados incorretos"
            });//não estoura erro ainda, só guarda messagem
        }

        if (!Number.isInteger(exemplares)) {
            return res.json({ message: "Exemplares deve ser um número inteiro" });//se exemplares não for number
          }
          //vai tentar
          try{

            console.log(nomeA, classe, familia, ambiente, bioma, exemplares, extincao);

            const novoAnimal = new Animais(uuidv4(),nomeA, classe, familia, ambiente, bioma, exemplares, extincao); //instancia a classe
    
            novoAnimal.salvarAnimal(novoAnimal);//q maluco

            res.json({ message: "Animal foi salvo", animal: novoAnimal});

          }catch(error){

                res.status(400).json({error});//dando errado, estoura o erro e mensagem
          }

    }

}

export default new AnimaisController();//exportando a classe