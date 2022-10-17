//Las promesas retornan un objeto *Promise*, es la principal diferencias con las arrows function

// Los parametros que se pasan estan denotados como *resolve* y *reject*, pero al llamarlos se le puede pasar cualquier nombre que queramos para identificarlos
const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Something wrong happened");
    } else {
      resolve(a + b);
    }
  });
};

const result = sumar(8, 7)
  .then((res) => {
    document.write(res);
  })
  .catch((error) => {
    document.write("something went wrong");
  });

// *.then* me permite atrapar y mostrar en pantalla el resultado del object promise, es decir atrapa la instruccion del *resolve* para mostrarla en pantalla
//*.catch*  al igual que el anterior en este caso atrapa la instruccion del *reject* para mostrarla en pantalla.
// Es de aclarar que dependediendo el resultado de la Promise, se ejecutara el resolve o el reject
