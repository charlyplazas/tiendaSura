// let numeros=[25,60,80,100,25,60,80,100]

// //RECORRER UN ARREGLO
// //ESCULCAR/OBTENER DE A 1 ELEMENTO

// //1. forEach
// numeros.forEach(function(numero){
//     console.log(numero)
// })


let comidas=[
    {
        nombre: "perro de la 10",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojo-88c29.appspot.com/o/ambur1.jpg?alt=media&token=e9d1b6fc-7553-4cbb-b7de-41e3b0a96a90"
    },
    {
        nombre: "perro Fit",
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojo-88c29.appspot.com/o/ambur2.jpg?alt=media&token=cca238c2-efa1-414f-a106-86328a975975"
    },
    {
        pero: "perro el chapo",
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojo-88c29.appspot.com/o/ambur3.jpg?alt=media&token=52e0ff50-0329-43a8-832d-47005c98dfb2"
    },
]
  


//RECORRIENDO EL ARREGLO
comidas.forEach(function(comida){
    console.log(comida.nombre)  



let fila = document.getElementById("fila")

//CREANDO UN DIV DESDE JV
let columna = document.createElement("div")
columna.classList.add("col")

//CREANDO UNA TARJETA
let tarjeta=document.createElement("div")
tarjeta.classList.add("card","shadow","text-center")

//CREANDO UNA IMAGEN
let imagen=document.createElement("img")
imagen.classList.add("img-fluid","w-100")
imagen.src=comida.foto

//DEFINIENDO PADRES E HIJOS
tarjeta.appendChild(imagen)
columna.appendChild(tarjeta)
fila.appendChild(columna)

})
