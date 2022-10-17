// *async* puede funcionar son *await* pero no puede suceder el caso contrario
const peticion = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5"); // *await* me permite hacer que el codigo espere hasta que la promesa este resuelta, lo que hace es evitar el uso del *.then* y que se extienda el codigo
  const data = await response.json();
  return data;
};
// El *async* y *await*, evita llenar el codigo de mucho *.then*, haciendolo mas sencillo y corto
const data = peticion().then(console.log); // No es necesario pasar el objeto al console.log, pues ella directamente imprime la variable o constante a la que se encuenta referencias
