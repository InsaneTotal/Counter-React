// JSON => (J)ava(S)cript (O)bject (N)otation

const usuario = {
  name: "Sebastian",
  edad: 29,
  email: "mail@mail.com",
};

document.write("<p>" + usuario.name + "</p>");
document.write("<p>" + usuario.email + "</p>");
document.write("<p>" + usuario.edad + "</p>");

// Destructuring

const { name, email, edad } = {
  name: "Sebastian",
  edad: 29,
  email: "mail@mail.com",
};

document.write("<p>" + name + "</p>");
document.write("<p>" + email + "</p>");
document.write("<p>" + edad + "</p>");

let items = {
  Marca: "",
  Pantalla: "",
  Precio: 0,
  Ref: "",
  Año: 0,
  Procesador: "",
  TarjetaGraf: "",
  RAM: "",
};
