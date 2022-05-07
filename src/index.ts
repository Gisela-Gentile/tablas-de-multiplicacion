import "./styles.css";
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el número de la tabla:";
rotulo2.innerHTML = "Ingrese hasta que número desea que muetre la tabla: ";

btnEnviar.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);
  let i: number = 1;
  let multiplicacion: number = 0;
  while (i <= num2) {
    multiplicacion = num1 * i;

    console.log(num1 + " x " + i + " = " + multiplicacion);
    i++;
  }
});
