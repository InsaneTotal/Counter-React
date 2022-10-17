// Dos opciones de condicionales:
// - if (Condicion) (Accion)
// - else (Accion cuando "if" no se cumple)
// ----------------------------------------
// const/let/var "nombre de variable" = condicion que retrone booleano "?" respuesta : otra respuesta
// es importante poner el signo de pregunta "?" para que se ejecute el ternario

const cuenta = -10;

const mensaje = cuenta < 0 ? "No tienes saldo" : "Tienes saldo"; //ternario
const mensaje1 = cuenta < 0 && "Hola"; //Definir condiciones

// let mensaje;

// if (cuenta < 0) mensaje = "No tienes saldo";
// else mensaje = "Tienes saldo";

document.write(mensaje1);
