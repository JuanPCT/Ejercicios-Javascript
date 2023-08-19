
    function solicitarDatos() {
      const nombre = prompt("Ingrese su nombre:");
      const cedula = prompt("Ingrese su cédula:");
      const direccion = prompt("Ingrese su dirección:");
      const edad = prompt("Ingrese su edad:");
      const telefono = prompt("Ingrese su teléfono:");
      const correo = prompt("Ingrese su correo:");
      const tipoSangre = prompt("Ingrese su tipo de sangre:");
      const estadoCivil = prompt("Ingrese su estado civil:");

      if (
        nombre !== null && nombre !== "" &&
        cedula !== null && cedula !== "" &&
        direccion !== null && direccion !== "" &&
        edad !== null && !isNaN(parseInt(edad)) &&
        telefono !== null && !isNaN(parseInt(telefono)) &&
        correo !== null && correo !== "" &&
        tipoSangre !== null && tipoSangre !== "" &&
        estadoCivil !== null && estadoCivil !== ""
      ) {
        document.getElementById("nombre").textContent = `Nombre: ${nombre}`;
        document.getElementById("cedula").textContent = `Cédula: ${cedula}`;
        document.getElementById("direccion").textContent = `Dirección: ${direccion}`;
        document.getElementById("edad").textContent = `Edad: ${edad}`;
        document.getElementById("telefono").textContent = `Teléfono: ${telefono}`;
        document.getElementById("correo").textContent = `Correo: ${correo}`;
        document.getElementById("tipoSangre").textContent = `Tipo de Sangre: ${tipoSangre}`;
        document.getElementById("estadoCivil").textContent = `Estado Civil: ${estadoCivil}`;
      } else {
        alert("Datos incompletos o inválidos");
      }
    }