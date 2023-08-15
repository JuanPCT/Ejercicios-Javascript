
/**
    2 - 
    Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
    Ingresar objetivo de visita (turismo, comidas, museos)
    Dependiendo de la opcion elegida
    ejemplo1 (antioquia y comidas)
    mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
    ejemplo 2: se ingreso cundinamarca y turismo
    mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
    alert("opcion no valida") en caso que no se ingrese alguna de las opciones
*/

let departamento2 = prompt("Ingrese un departamento (cundinamarca, quindio, antioquia, valle)");
let objetivo = prompt("Ingrese objetivo de visita (turismo, comidas, museos)");

departamento2 = departamento2.toLowerCase();
objetivo = objetivo.toLowerCase();

switch (departamento2) {
    case "cundinamarca":
        switch (objetivo) {
            case "turismo":
                alert("Lugares para visitar en cundinamarca es monserrate, la candelaria etc");
                break;
            case "comidas":
                alert("Las comidas mas populares en cundinamarca son el ajiaco, el tamal etc");
                break;
            case "museos":
                alert("Los museos mas populares en cundinamarca son el museo del oro, el museo nacional etc");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        break;
    case "quindio":
        switch (objetivo) {
            case "turismo":
                alert("Lugares para visitar en quindio es el parque del cafe, el parque de los arrieros etc");
                break;
            case "comidas":
                alert("Las comidas mas populares en quindio son la bandeja paisa, arepa rellena etc");
                break;
            case "museos":
                alert("Los museos mas populares en quindio son el museo del oro, el museo nacional etc");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        break;
    case "antioquia":
        switch (objetivo) {
            case "turismo":
                alert("Lugares para visitar en antioquia es el parque del cafe, el parque de los arrieros etc");
                break;
            case "comidas":
                alert("Las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc");
                break;
            case "museos":
                alert("Los museos mas populares en antioquia son el museo del oro, el museo nacional etc");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        break;
    case "valle":
        switch (objetivo) {
            case "turismo":
                alert("Lugares para visitar en valle es el parque del cafe, el parque de los arrieros etc");
                break;
            case "comidas":
                alert("Las comidas mas populares en valle son la bandeja paisa, arepa rellena etc");
                break;
            case "museos":
                alert("Los museos mas populares en valle son el museo del oro, el museo nacional etc");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        break;
    default:
        alert("Opcion no valida");
        break;
}

