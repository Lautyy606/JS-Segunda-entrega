// Definición de variables y pedido de ingreso de datos.

let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let contraseniaIngresada = prompt("Ingrese su contraseña")
const contrasenia = "0000"

// Se busca que se ingresen todos los datos. 

if ((nombreUsuario != "") && (apellidoUsuario != "")) {
    console.log("Usuario: " + nombreUsuario + " " + apellidoUsuario);
} else {
    console.log("Todos los campos son obligatorios.");
}

while(contraseniaIngresada != "0000"){
    console.log("Contraseña incorrecta. Vuelve a intentarlo.")
    alert("Contraseña incorrecta. Vuelve a intentarlo.")
    contraseniaIngresada = prompt("Ingrese su contraseña")
}

if (contraseniaIngresada == contrasenia){
    console.log("Inicio de sesión con éxito. Bienvenido a Indumentaria GL")
    alert("Inicio de sesión con éxito. Bienvenido a Indumentaria GL")
}


let ropa = prompt(`Que prenda deseas ver?
1: remeras
2: hoddies
3: rompevientos
4: joggins
`)

switch (ropa) {
    case "remeras":
    case "1":
        console.log("Estás en la sección remeras")
        break
    case "hoddies":
    case "2":
        console.log("Estás en la sección Hoddies")
        break
    case "rompevientos":
    case "3":
        console.log("Estás en la sección Rompevientos")
        break
    case "joggins":
    case "4":
        console.log("Estás en la sección Joggins")
        break
    default:
        console.log("No contamos con ese tipo de prenda")
        alert("No contamos con ese tipo de prenda")
        break
}