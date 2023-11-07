// Defino un array de productos. Que voy a mostrar como catalogo

let productos = [
    { id: 1, titulo: "Remera blanca", precio: 2500 },
    { id: 2, titulo: "Remera negra", precio: 2500 },
    { id: 3, titulo: "Remera azul", precio: 2500 },
    { id: 4, titulo: "Hoddie blanco", precio: 5000 },
    { id: 5, titulo: "Hoddie negro", precio: 5000 },
    { id: 6, titulo: "Hoddie azul", precio: 5000 },
    { id: 7, titulo: "Rompeviento blanco", precio: 6000 },
    { id: 8, titulo: "Rompeviento negro", precio: 6000 },
    { id: 9, titulo: "Rompeviento azul", precio: 6000 },
    { id: 10, titulo: "Jogging negro", precio: 7500 },
    { id: 11, titulo: "Jogging blanco", precio: 7500 },
    { id: 12, titulo: "Jogging azul", precio: 7500 },
]

localStorage.setItem("catalogo", JSON.stringify(productos))

const productosLocalStorage = JSON.parse( localStorage.getItem( "catalogo" ) )

const carrito = [];

const divCatalogo = document.getElementById("catalogo")

const divCarrito = document.getElementById("carrito")

for (let i = 0; i < productosLocalStorage.length; i++) {
    const producto = productosLocalStorage[i];

    // PASO 1- Creo el elemento div vacio y lo guardo en una variable
    let contenedor = document.createElement("div");

    // PASO 2- Completo mi div vacio con el producto que quiero mostrar
    // ACLARACION: Hasta este paso todavia NO esta en el HTML
    contenedor.innerHTML = `
     <div class="card mb-2" style="width: 18rem;">
     <div class="card-body">
      <h5 class="card-title">${producto.titulo}</h5>
      <p class="card-text">$${producto.precio}</p>
      <button onclick="añadirProducto(${i})" id="agregar-carrito-btn" class="btn btn-primary">Agregar al carrito</button>
     </div>
     </div>
     `;

     // PASO 3- (EL MAS IMPORTANTE) 
     // Aca inyecto el div del producto que cree en los pasos 1 y 2
     // Para que finalmente se vea en el HTML
    divCatalogo.appendChild(contenedor);
}

function añadirProducto(index) {
  const producto = productosLocalStorage[index];
  carrito.push(producto);
  console.log("Producto añadido al carrito: " + producto.titulo);
  console.log(carrito);



  let productoCarrito = document.createElement("div")

  productoCarrito.innerHTML = `
  <div class="card mb-2" style="width: 18rem;">
  <div class="card-body">
   <h5 class="card-title">${producto.titulo}</h5>
   <p class="card-text">$${producto.precio}</p>
   <button onclick="eliminarProducto(${producto})" id="agregar-carrito-btn" class="btn btn-danger">Eliminar del carrito</button>
  </div>
  </div>
  `;

  divCarrito.appendChild(productoCarrito);
}
