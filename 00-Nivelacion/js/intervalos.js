//La funcion setInterval permite crear un intervalo de tiempo

const saludo = () => {
  document.write("<li>Hola hijos de su puta madre</li>");
};

document.write("<ol>");

// Es importante quitar el parentesis de la funcion para que el interval pueda usar el callBack como el quiera, pues con los parentesis solo se invoca una vez
setInterval(saludo(), 2000);

document.write("</ol>");
