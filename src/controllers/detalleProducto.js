console.log("hola estoy detallando la compra");

//lamar a la memora

let producto = JSON.parse(localStorage.getItem("producto"));
console.log(producto);

//referenciar la imagen del producto
let nombre = document.getElementById("nombreInfo");
nombre.textContent = producto.nombre;

let foto = document.getElementById("imagenInf");
foto.src = producto.foto;

let descripcion = document.getElementById("descripcionInfo");
descripcion.textContent = producto.descripcion;

let precio = document.getElementById("precioInfo");
precio.textContent = producto.precio;
