const cartIcon = document.getElementById("carticon");
const closecart = document.getElementById("closecart");
const cart = document.getElementById("cartsection");
const cartItems = document.getElementById("cartItems");

const productos = [
  {
    id: 1,
    nombre: "Angels",
    precio: 350,
    src: "assets/img/hatsproyecto/1.jpg",
  },
];

const btnp1 = document.getElementById("btn-p1");
const numberOfItems = document.getElementById("numberOfItems");

//Eventos para abrir y cerrar el carrito
cartIcon.addEventListener("click", () => {
  cart.classList.add("visible");
});

closecart.addEventListener("click", () => {
  cart.classList.remove("visible");
});

//Eventos para añadir al carrito de cada producto

btnp1.addEventListener("click", () => {
  const id = 1;
  const d1 = document.createElement("div");
  d1.classList.add("productReview");

  const crearElementoDivCarrito = (idItem, cantidad, div) => {
    let { nombre, precio, src } = arrayProductos.find(
      ({ id }) => id === idItem
    );

    precio = cantidad * precio;

    div.innerHTML = `
    <img src="${src}">
    <p>${precio}</p>
    <p>x${cantidad}</p>
    <h3>${nombre}</h3>
    <img class="boton-eliminar-producto" src="img/delete.png">
  `; //Cantidad de producto

    cartItems.appendChild(div);
    total += precio;
    montoTotal.textContent = `${total}`;

    nItems.classList.add("numItems");
    nItems.textContent = ++itemsCarrito;

    const producto = { nombre, precio };
    arrayCarrito.push(producto);

    localStorage.setItem("producto", JSON.stringify(arrayCarrito));
  };
});
