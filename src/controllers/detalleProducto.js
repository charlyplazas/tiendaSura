//lamar a la memora

let producto = JSON.parse(localStorage.getItem("producto"));
console.log(producto);
let carritoMemoria = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoMemoria);

let carrito;
if (JSON.parse(localStorage.getItem("carrito")) != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let pildora = document.getElementById("pildora");
  pildora.textContent=carrito.length
} else {
  carrito = [];
}

//referenciar la imagen del producto
let nombre = document.getElementById("nombreInfo");
nombre.textContent = producto.nombre;

let foto = document.getElementById("imagenInf");
foto.src = producto.foto;

let descripcion = document.getElementById("descripcionInfo");
descripcion.textContent = producto.descripcion;

let precio = document.getElementById("precioInfo");
precio.textContent = producto.precio;

let pildora = document.getElementById("pildora");
console.log(pildora.textContent);

//escucho el clic en el bonoton añadir al carrito

let botonAgregarCarrito = document.getElementById("botonAgregarCarrito");
botonAgregarCarrito.addEventListener("click", function () {
  let cantidad = document.getElementById("cantidadProducto");
  cantidad = cantidad.value;
  console.log("agregaste: " + cantidad);

  //agregamos la cantidad al objeto producto
  producto.cantidad = cantidad;
  console.log(producto);

  //agregamos el producto al carrito de compras
  carrito.push(producto);
  console.log(carrito);

  //agregando el carrito a la memoria
  localStorage.setItem("carrito", JSON.stringify(carrito));

  let cantidadCarrito = carrito.length;
  pildora.textContent = cantidadCarrito;
});
