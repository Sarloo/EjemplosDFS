function sumar(e) {

   let numero1 = parseInt(document.getElementById("numero1").value); 
   let numero2 = parseInt(document.getElementById("numero2").value); 



   let resultado = 0;
   let operacion = e.target.id;

   if (operacion === "suma") {
      resultado = numero1 + numero2;
   } else if (operacion === "resta") {
      resultado = numero1 - numero2;
   } else if (operacion === "multiplica") {
      resultado = numero1 * numero2;
   } else if (operacion === "divide") {
      resultado = numero1 / numero2;
   }
   else  {
      // Algoritmo de Euclides para el máximo común divisor (MCD)
      alert("Funcionalidad en progreso");
   }

   let result = document.getElementById("resultado");
   result.innerHTML = resultado;
}

let botones = document.getElementById("btns");
botones.addEventListener("click", sumar);
