let etiquetaBoton = document.getElementById("boton")


etiquetaBoton.addEventListener("click",function(){
    let nombre= document.getElementById("nombre").value
    let saludo = document.getElementById("saludo")
    saludo.textContent= "hola " + nombre + " comoo estas?"  

})
