//controlar etiquetas desde JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LEMEA ETIQUETA(ELNTO)
etiquetaTitulo.textContent="jefe usted es como mi padre"
console.log(etiquetaTitulo)
//1.2 MANIPULANDO EL SRC
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/R1-2022-COLOR_NEGRO.jpg?alt=media&token=e9c47e45-661b-4866-a10a-2da73d233eaa"


//2. CONTROLANDO EL DISEÑO
 let parrafo = document.getElementById("parrafo")
 parrafo.textContent="gdfgdfgbgfbhgf"

 //2.1 AGREGANDO UN ESTILO (CLASS)
 //text-danger

 parrafo.classList.add("text-danger","fs-1","text-center")

 etiquetaImagen.classList.add("d-block","mx-auto")

 //2.2 QUITANDO UN ESTILO

 parrafo.classList.remove("text-center","text-danger")