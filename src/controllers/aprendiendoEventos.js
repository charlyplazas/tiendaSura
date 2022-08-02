let etiquetaBoton = document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS

etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="hola soy yo de nuevo"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="mentiras no todos"
    mensaje.classList.add("text-danger")
    let foto = document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/dario.jpg?alt=media&token=46fbe53e-1a66-49f5-8aea-308f4891334c"
})