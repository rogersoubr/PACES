//import {Animais} from "../models/Animais.model.js";
import {Locais} from "../models/Locais.model.js";

class LocaisController{
    getLocais(req,res){
        //console.log("Mostando todos os locais");
        res.json({message:"Mostando todos os locais",
            local: Locais.local}
        );
    }

}

export default new LocaisController();//exportando a classe