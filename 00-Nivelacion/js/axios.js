axios
  .get("https://jsonplaceholder.typicode.com/users/5") // *.get*, es una funcion para pedir
  .then(({ data }) => document.write(data.address.geo.lat)); //El destructuring me permite entrar directamente a alguna de las propiedades que vengan del endpoint con el get, pasando como parametro dentro de las llaves el nombre de una de sus propiedades

// A diferencia de *fetch*, con axios el procesos es mas corto, funciona de la misma manera, pero el uso ya va en gustos y preferencias
