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
  {
    id: 19,
    nombre: "LA K/B",
    precio: 350,
    src: "assets/img/hatsproyecto/19.jpg",
  },
  {
    id: 21,
    nombre: "LA K/B",
    precio: 350,
    src: "assets/img/hatsproyecto/21.jpg",
  },
  {
    id: 22,
    nombre: "NY B/B",
    precio: 350,
    src: "assets/img/hatsproyecto/22.jpg",
  },
];

const arrayCarrito = [];

const btnp1 = document.getElementById("btn-p1");
const btnp19 = document.getElementById("btn-p19");
const btnp21 = document.getElementById("btn-p21");
const btnp22 = document.getElementById("btn-p22");

const btnminusp1 = document.getElementById("counterminusp1");
const cantidadp1 = document.getElementById("cantidadp1");
const btnplusp1 = document.getElementById("counterplusp1");

const btnminusp19 = document.getElementById("counterminusp19");
const cantidadp19 = document.getElementById("cantidadp19");
const btnplusp19 = document.getElementById("counterplusp19");

const btnminusp21 = document.getElementById("counterminusp21");
const cantidadp21 = document.getElementById("cantidadp21");
const btnplusp21 = document.getElementById("counterplusp21");

const btnminusp22 = document.getElementById("counterminusp22");
const cantidadp22 = document.getElementById("cantidadp22");
const btnplusp22 = document.getElementById("counterplusp22");

const nItems = document.getElementById("numberOfItems");

const iconoMenuResponsive = document.getElementById("iconoresponsive");
const menuresponsive = document.getElementById("menuresponsive");
const closeResponsiveMenu = document.getElementById("closeresponsivemenu");

//eventos para abrir y cerrar el menu responsivo
iconoMenuResponsive.addEventListener("click", () => {
  menuresponsive.classList.add("active");
});

closeResponsiveMenu.addEventListener("click", () => {
  menuresponsive.classList.remove("active");
});

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

btnp19.addEventListener("click", () => {
  const idItem = 19;
  const d19 = document.createElement("div");
  d19.classList.add("productReview");

  const cantidad = parseInt(cantidadp19.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    crearElementoDivCarrito(idItem, cantidad, d19);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp19.textContent = "0";
});

btnp21.addEventListener("click", () => {
  const idItem = 21;
  const d21 = document.createElement("div");
  d21.classList.add("productReview");

  const cantidad = parseInt(cantidadp21.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    crearElementoDivCarrito(idItem, cantidad, d21);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp21.textContent = "0";
});

btnp22.addEventListener("click", () => {
  const idItem = 22;
  const d22 = document.createElement("div");
  d22.classList.add("productReview");

  const cantidad = parseInt(cantidadp22.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    crearElementoDivCarrito(idItem, cantidad, d22);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp22.textContent = "0";
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

btnminusp19.addEventListener("click", () => {
  if (cantidadp19.textContent === "0") {
    cantidadp19.textContent = "0";
  } else {
    cantidadp19.textContent = parseInt(cantidadp19.textContent) - 1;
  }
});

btnplusp19.addEventListener("click", () => {
  cantidadp19.textContent = parseInt(cantidadp19.textContent) + 1;
});

btnminusp21.addEventListener("click", () => {
  if (cantidadp21.textContent === "0") {
    cantidadp21.textContent = "0";
  } else {
    cantidadp21.textContent = parseInt(cantidadp21.textContent) - 1;
  }
});

btnplusp21.addEventListener("click", () => {
  cantidadp21.textContent = parseInt(cantidadp21.textContent) + 1;
});

btnminusp22.addEventListener("click", () => {
  if (cantidadp22.textContent === "0") {
    cantidadp22.textContent = "0";
  } else {
    cantidadp22.textContent = parseInt(cantidadp21.textContent) - 1;
  }
});

btnplusp22.addEventListener("click", () => {
  cantidadp22.textContent = parseInt(cantidadp22.textContent) + 1;
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

//funcion para incrementar el indice del array rutasCarrusel

const rutasCarrusel = [
  "assets/img/hatscarrusel/NYFront.jpg",
  "assets/img/hatscarrusel/AngelsBPFront.jpg",
  "assets/img/hatscarrusel/AngelsBRFront.jpg",
  "assets/img/hatscarrusel/BjBrownFront.jpg",
  "assets/img/hatscarrusel/LABKFront.jpg",
  "assets/img/hatscarrusel/LABlackFront.jpg",
  "assets/img/hatscarrusel/LAKBFront.jpg",
  "assets/img/hatscarrusel/LAKBlackFront.jpg",
  "assets/img/hatscarrusel/NYBBFront.jpg",
  "assets/img/hatscarrusel/SoxRoseFront.jpg",
  "assets/img/hatscarrusel/SFBrownFront.jpg",
  "assets/img/hatscarrusel/SFBlackFront.jpg",
  "assets/img/hatscarrusel/NYRoseFrontVenta.jpg",
];
let indice = 0;
const imagenCarrusel = document.getElementById("carruselHero");

const carruselHero = () => {
  imagenCarrusel.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + 1) % rutasCarrusel.length;
    imagenCarrusel.src = rutasCarrusel[indice];
    imagenCarrusel.style.opacity = 1;
  }, 500);
};

imagenCarrusel.src = rutasCarrusel[indice];
setInterval(carruselHero, 2000);

//eventos para las left y right arrow para ver mas fotos de las gorras
const leftArrow = document.getElementById("leftarrow");
const rightArrow = document.getElementById("rightarrow");
const imagenGorra = document.getElementById("hatimagep1");
const arrayG1 = ["assets/img/hatsproyecto/1/AngelsBPFront.jpg",
   "assets/img/hatsproyecto/1/AngelsBPInside.jpg",
  "assets/img/hatsproyecto/1/AngelsBPSide.jpg",
"assets/img/hatsproyecto/1/AngelsBPSide2.jpg",
"assets/img/hatsproyecto/1/AngelsBPBack.jpg"];
leftArrow.addEventListener("click", () => {
  const servidor = window.location.origin;

  const ruta = imagenGorra.src.toString();

// Encuentra la posición inicial de "assets"
const inicio = ruta.indexOf("assets");

// Recorta el string desde esa posición hasta el final
const rutaRecortada = ruta.substring(inicio);

console.log(rutaRecortada);

  if(rutaRecortada === "assets/img/hatsproyecto/1.jpg") {
    console.log(arrayG1[4]);
    imagenGorra.src = `${servidor}/${arrayG1[4]}`; 
    console.log(imagenGorra.src)
  }else{
    const rutaActual = imagenGorra.src;
    console.log(rutaActual);
    imagenGorra.src = `${servidor}/${arrayG1[0]}`;
  }
  });
rightArrow.addEventListener("click", () => {
  const currentIndex = arrayG1.indexOf(imagenGorra.src);
  console.log(currentIndex);//-1 quiere decir que no se encuentra en el array

})
