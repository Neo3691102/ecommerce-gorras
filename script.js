const cartIcon = document.getElementById("carticon");
const closecart = document.getElementById("closecart");
const cart = document.getElementById("cartsection");
const cartItems = document.getElementById("productcontainer");
let itemsCarrito = 0;
let total = 0;
const montoTotal = document.getElementById("montoxpagar");

const productos = [
  {
    id: 1,
    nombre: "Angels",
    precio: 350,
    src: "assets/img/hatsproyecto/1.jpg",
  },
];

const arrayCarrito = [];

const btnp1 = document.getElementById("btn-p1");
const btnminusp1 = document.getElementById("counterminusp1");
const cantidadp1 = document.getElementById("cantidadp1");
const btnplusp1 = document.getElementById("counterplusp1");
const nItems = document.getElementById("numberOfItems");

//Eventos para abrir y cerrar el carrito
cartIcon.addEventListener("click", () => {
  cart.classList.add("visible");
});

closecart.addEventListener("click", () => {
  cart.classList.remove("visible");
});

//Eventos para añadir al carrito de cada producto

btnp1.addEventListener("click", () => {
  const idItem = 1;
  const d1 = document.createElement("div");
  d1.classList.add("productReview");

  const cantidad = parseInt(cantidadp1.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d1);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp1.textContent = "0";
});

//Eventos para aumentar y disminuir cantidad de productos
btnminusp1.addEventListener("click", () => {
  if (cantidadp1.textContent === "0") {
    cantidadp1.textContent = "0";
  } else {
    cantidadp1.textContent = parseInt(cantidadp1.textContent) - 1;
  }
});
btnplusp1.addEventListener("click", () => {
  cantidadp1.textContent = parseInt(cantidadp1.textContent) + 1;
});

//metodo para crear el elemento del carrito
const crearElementoDivCarrito = (idItem, cantidad, div) => {

  let { nombre, precio, src } = productos.find(({ id }) => id === idItem);
  
  precio = cantidad * precio;

  div.innerHTML = `
    <img src="${src}">
    <p>${precio}</p>
    <p>x${cantidad}</p>
    <h3>${nombre}</h3>
    <img class="boton-eliminar-producto" src="assets/img/delete.png">
    
  `; //Cantidad de producto
  console.log(cartItems);

  cartItems.appendChild(div);
  total += precio;
  console.log(total);

  montoTotal.textContent = `${total}`;
  console.log(montoTotal);

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;

  const producto = { nombre, precio };
  arrayCarrito.push(producto);

  localStorage.setItem("producto", JSON.stringify(arrayCarrito));
};

//evento para eliminar producto del carrito
cartItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton-eliminar-producto")) {
    const productoAEliminar = event.target.closest(".productReview");
    console.log(productoAEliminar);

    if (productoAEliminar) {
      const p = productoAEliminar.querySelector("p");
      precioProductoEliminado = parseFloat(p.textContent);
      console.log(precioProductoEliminado);

      total -= precioProductoEliminado;
      console.log(total);
      montoTotal.textContent = `${total.toString()}`;
      console.log(montoTotal.textContent);

      itemsCarrito--;
      nItems.textContent = itemsCarrito.toString();
      if (itemsCarrito === 0) {
        nItems.classList.remove("numItems");
        nItems.textContent = "";
      }

      productoAEliminar.remove();

      alert("Producto eliminado del carrito");
    }
  }
});