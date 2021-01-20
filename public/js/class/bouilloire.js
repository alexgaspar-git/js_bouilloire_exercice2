// # Bouilloire 
// - Remplire avec de l'eau.
// - Chauffer jusqu'a 100°C.
// - Chaque second la temperature augmente de 20°C.
// - Si la temperature est egal a 100°C la bouilloire s'éteint.

let bouilloire = {
    eau: "vide",
    temperature: 0,
}

import {remplir} from '../function/remplir.js'
import {chaufi} from '../function/chauffer.js'

remplir(bouilloire);
chaufi(bouilloire);

console.log(bouilloire);


