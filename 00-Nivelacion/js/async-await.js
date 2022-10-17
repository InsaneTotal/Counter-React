const saludo = () => {
  return new Promise((resolve, reject) => {
    //Si no se usa el reject no es necesario declararlo
    resolve("Hola mundo");
  });
};

saludo().then((response) => console.log(response));
// La funcion *async* me permite retornar directamente sin tener que declarar la promesa, esto se debe a que todas las funciones *async* se convierten en promesas

const saludo2 = async () => {
  return "Hola mundo x2";
};

saludo2().then((response2) => document.write(response2));

// La funcion *await*

const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    };
    console.log(datos);
  }, 2500);
};

peticion().then(console.log);
