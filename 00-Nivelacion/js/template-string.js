// Formas mas sencillas de imprimir texto en pantalla
// Importante el uso de las BACKSTICKS(''), que me permite hacer interpolaciones dentro de un mismo string, es decir meter variables dentro de un texto y se comporte como uno solo

const name = "Sebastian";
const edad = new Date().getFullYear() - 1992;

console.log(`Bienvenido ${name}, tu edad es de ${edad}`);

// El uso de el simbolo de peso junto a una apertura de llaves (${ }), me permite ejecutar codigo JavaScript dentro del mismo, cuando se esta trabajando con un Template-String
