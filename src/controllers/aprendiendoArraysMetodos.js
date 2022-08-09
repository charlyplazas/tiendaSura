// let numeros=[25,60,80,100,25,60,80,100]

// //RECORRER UN ARREGLO
// //ESCULCAR/OBTENER DE A 1 ELEMENTO

// //1. forEach
// numeros.forEach(function(numero){
//     console.log(numero)
// })


//QUEMAR(HARD CORE) LA BASE DE DATOS
let productos=[

    {
        nombre:"MT-10",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/Mt10_azul.jpg?alt=media&token=24a640a2-4061-4b8c-a523-9f1909f07cdb","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/Mt10_gris.jpg?alt=media&token=5e460772-5039-4ebb-a9d4-2077dd1c579d"],
        precio:74.000000,
        popularidad:5,
        descripcion:"998 CC CP4 ENGINE a new simplified appearance by removing unnecessary elements from the body and refocusing attention on the pure mechanical beauty of the muscular engine and compact frame. The new double-eye single-focus LED headlights and LED position lights above the headlights are combined with a more compact nose assembly to minimize overhang and provide a refined and dominant style"
    },
    {
        nombre:"Crypton 2022",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/Negro-rojo-1.jpg?alt=media&token=aa056886-e85c-41f5-9282-fa759ffcf54e","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/cryptonFi.png?alt=media&token=ef43e2d4-aa87-4a70-b9e1-e6434db85dd4",],
        precio:7800000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"N-max",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/NmaxGris.jpg?alt=media&token=01a7cc1c-adc4-45d7-97eb-b2a0c8f92bd7","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/NmaxBlanca.jpg?alt=media&token=7bfbe410-b42c-4f11-b2fa-f92498050b97",],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"R1",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/R1-2022-COLOR_AZUL.jpg?alt=media&token=aa647be1-b3e3-4100-96c8-efc0616ec017","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/R1-2022-COLOR_NEGRO.jpg?alt=media&token=e9c47e45-661b-4866-a10a-2da73d233eaa",],
        precio:91000000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"YBR-Z 125",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/azul-1.png?alt=media&token=35555848-066f-4e9e-bd60-50d2106a392f","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/gris.png?alt=media&token=3dda3ef3-c35a-4d21-933c-de4008d217ac",],
        precio:7500000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"YCZ 110",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/yamaha-ycz-110-negra-con-rojo.png?alt=media&token=b438b3b3-6de4-48fe-a82f-015a68423c46","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/yamaha-ycz-110-roja.png?alt=media&token=12d10d08-19b3-4ae9-8f33-b0017e6c6bac"],
        precio:5900000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"Fz-150",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/fz-black_mate.png?alt=media&token=d1c2a1d1-bd10-47e9-999a-55c9277980e9","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/fz-blanca.jpg?alt=media&token=f6d09feb-9dc4-43d5-9661-d687449be718"],
        precio:9500000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"Fz 250",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/fz25-2-1-1.jpg?alt=media&token=0e6b95a5-a418-4eb9-90fd-60bc775447ba","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/fz25-3-1.jpg?alt=media&token=1656d89d-70df-4fa7-bbcb-d309d443ea16"],
        precio:14000000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"SZRR 150",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/szrAzul.png?alt=media&token=6b8857b9-fde1-4041-bd08-592aa1de3dc2","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/Gris-Verde-01-600x600.png?alt=media&token=dbedac99-9f38-4364-a845-f188fa425f96"],
        precio:8400000,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"x-Max",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/xmax1.jpg?alt=media&token=ee21b973-6475-46a2-86e8-e600380e1d8e","https://firebasestorage.googleapis.com/v0/b/tiendasuracharlyp.appspot.com/o/xmax3-2.jpg?alt=media&token=7bc2c3fe-e6b1-440b-9005-1cdd1b894e12"],
        precio:31500000,
        popularidad:0,
        descripcion:""
    },
    
    ]
    


//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){



let fila = document.getElementById("fila")

//CREANDO UN DIV DESDE JV
let columna = document.createElement("div")
columna.classList.add("col")

//CREANDO UNA TARJETA
let tarjeta=document.createElement("div")
tarjeta.classList.add("card","shadow","text-center","h-100")

//CREANDO UNA IMAGEN
let imagen=document.createElement("img")
imagen.classList.add("img-fluid","w-100")
imagen.src=producto.fotos[0]

//DETECTANDO EVENTO DE MOUSE
imagen.addEventListener("mouseover",function(){
    imagen.src=producto.fotos[1]
})
imagen.addEventListener("mouseleave",function(){
    imagen.src=producto.fotos[0]
})

// CREANDO UN NOMBRE
let nombre=document.createElement("h3")
nombre.classList.add("fw-bold","text-center")
nombre.textContent=producto.nombre

// CREANDO UN PRECIO
let precio=document.createElement("h4")
precio.classList.add("fw-bold","text-center")
precio.textContent=producto.precio

// CREANDO UN POPULARIDAD
let popularidad=document.createElement("p")
popularidad.classList.add("fw-bold","text-center")
popularidad.textContent=producto.popularidad

// CREANDO UN DESCRIPCION
let descripcion=document.createElement("h5")
descripcion.classList.add("fw-bold","text-center")
descripcion.textContent=producto.descripcion




//DEFINIENDO PADRES E HIJOS
tarjeta.appendChild(imagen)
tarjeta.appendChild(nombre)
tarjeta.appendChild(precio)
tarjeta.appendChild(popularidad)
tarjeta.appendChild(descripcion)
columna.appendChild(tarjeta)
fila.appendChild(columna)

//let 


})
