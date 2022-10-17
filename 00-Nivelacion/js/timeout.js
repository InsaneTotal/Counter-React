const evaluar = () => {
  const edad = prompt("Cual es tu edad?");

  if (edad < 18) {
    alert("Menor de edad");
    return;
  }
  alert("Mayor de edad");
};

// La funcion setTimeout, retrasa la ejecucion de una funcion especificada durante el tiempo especificado mientras sigue ejecuntando otras partes del codigo
setTimeout(evaluar, 2000);
// evaluar()
