let amigos = [];
//funcion que me permite obtener el nombre ingresado por el usuario 
function agregarAmigo(){
    //Se implementa una validación para asegurar de que no se envien campos vacios
    if(document.getElementById("amigo").value.trim() === ""){
        //Se envia una alerta al usuario para que verifique el campo que se encuentra vacio
        alert("Por favor, ingresa un nombre.");
    }else{
        //Ingresamos el valor del campo a al array amigo
        amigos.push(document.getElementById("amigo").value);
        // Limpiamos la lista antes imprimir sobre ella
        document.getElementById("listaAmigos").innerHTML="";
        //Ciclo for para recorrer el array amigos
        for (let i = 0; i < amigos.length; i++){
            //Creamos un objeto li 
            const listItem = document.createElement('li');
            //agregamos un texto al li con los elmentos del array
            listItem.textContent = amigos[i];
            //agregarmos al ul el li 
            document.getElementById("listaAmigos").appendChild(listItem);
        }
        //Borramos el campo de entrada para que el usuario pueda ingresar nuevamente otro nombre
        document.getElementById("amigo").value = "";
    }
    
}