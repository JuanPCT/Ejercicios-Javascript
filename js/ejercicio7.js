// Ejercicio de lógica
let day = prompt("Ingrese día");

if (day === null || day === "") {
  alert("Opcion invalida");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miércoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un día entre semana");
  } else {
    // iF ANIDADOS
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert("Es un fin de semana");
    } else {
      alert("Favor ingresar solo días de la semana");
    }
  }
}

/**
 * NOTAS:
 * 1- Mayusculas
 * 2 - palabras que no son días
 * 3 - vacio
 * 4 - no le de nada
 * 5 -tildes
 *
 * Diagramas de flujo
 */
