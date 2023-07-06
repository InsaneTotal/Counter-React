// Modelo 1
// if ("serviceWorker" in navigator) {
//   console.log("Si existe");
// }

//Modelo 2

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./serviceWorker.js");
}
