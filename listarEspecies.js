
// 1. Conectarnos a la ruta /listar_especie
//2. recorrer el json 
// -  agregar una fila en la tabla por cada objeto retornado en el json
//

import EspecieAPI from "./EspecieAPI.js";

const miEspecie=new EspecieAPI();


miEspecie.listarEspecies(); 