const [users1, users2] = ["Jonatan", "Juan", "Sebastian", "Cristian"];

document.write("El nombre del usuario es: " + users1 + " " + users2);

const fun1 = (a, b, c) => a + b * c;

// const numeros = [1, 2, 3, 4];

// document.write("<ul>");
// for (num in numeros) {
//   document.write("<li>");
//   document.write(num);
//   document.write("</li>");
// }
// document.write("</ul>");

// Hay diferentes metodos de recorrer arrays sin necesidad de usar el ciclo for

// const numeros = [1, 2, 3, 4, 5];

// document.write("<ul>");
// numeros.map((numero) => {
//   document.write("<li>" + numero + "</li>"); //Instruccion de 4 lineas
// });
// document.write("</ul>");

// Metodo map(), crea una lista sin afectar la que esta recorriendo y la deja manipular en la medida que se quiero necesite

// document.write("<ul>");
// numeros.map((numero) => document.write("<li>" + numero + "</li>")); // Misma instruccion en 1 linea
// document.write("</ul>");

// const test1 = numeros.map((numeroTest) => numeroTest);
