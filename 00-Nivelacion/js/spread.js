const frutas = ["manzana", "peras", "bananos"];
const frutosVerdes = ["kiwi", "manzana verde", "limon"];

// Para crear una copia de las dos listas anteriormente creadas se utiliza el operador SPREAD el cual se denota con 3 puntos (...), antes de la lista a copiar:

const inventario = [...frutas, ...frutosVerdes]; //Los 3 puntos hace que la listas sean copiadas en una nueva con se respectiva coma separadora

document.write(inventario);
