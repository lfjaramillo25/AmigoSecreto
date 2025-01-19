let amigos = [];
let nombre = document.getElementById("amigo");
//funcion que me permite obtener el nombre ingresado por el usuario 
function agregarAmigo(){
    //Se implementa una validación para asegurar de que no se envien campos vacios
    if(nombre.value.trim() === ""){
        //Se envia una alerta al usuario para que verifique el campo que se encuentra vacio
        alert("Por favor, ingresa un nombre.");
    }else{
        //Ingresamos el valor del campo a al array amigo
        amigos.push(nombre.value);
        //Creamos un nuevo elemento <li>
        const nombreIngresado = document.createElement('li');
        nombreIngresado.textContent = nombre.value
        // Agregar el <li> a la lista <ul>
        document.getElementById('listaAmigos').appendChild(nombreIngresado)
        console.log(amigos);
        //Borramos el campo de entrada para que el usuario pueda ingresar nuevamente otro nombre
        nombre.value = "";
        nombre.focus(); //Enfoca nuevamente el input
    }
     
}