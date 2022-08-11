let contenedorProductos = document.getElementById("fila");

//ESCUCHO CLIC EN LA FILA
let informacionProducto = {};
contenedorProductos.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("img-fluid")) {
    informacionProducto.foto =
     ( evento.target.parentElement.querySelector("img").src);
    informacionProducto.nombre =
      (evento.target.parentElement.querySelector("h3").textContent);
    informacionProducto.precio =
      (evento.target.parentElement.querySelector("h4").textContent);
    informacionProducto.popularidad =
      (evento.target.parentElement.querySelector("p").textContent);
    informacionProducto.descripcion =
     ( evento.target.parentElement.querySelector("h5").textContent);

    //guardando un objeto en memoria

    localStorage.setItem("producto", JSON.stringify(informacionProducto));
    window.location.href = "./ampliarinfo.html";
  }
});
