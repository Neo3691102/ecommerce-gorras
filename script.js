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
    id: 2,
    nombre: "Blue Jays",
    precio: 350,
    src: "assets/img/hatsproyecto/2.jpg",
  },
  {
    id: 3,
    nombre: "Dodgers",
    precio: 350,
    src: "assets/img/hatsproyecto/3.jpg",
  },
  {
    id: 4,
    nombre: "Yankees",
    precio: 350,
    src: "assets/img/hatsproyecto/4.jpg",
  },
  {
    id: 5,
    nombre: "LA Backwards",
    precio: 350,
    src: "assets/img/hatsproyecto/5.jpg",
  },
  {
    id: 6,
    nombre: "LA Stars",
    precio: 350,
    src: "assets/img/hatsproyecto/6.jpg",
  },
  {
    id: 7,
    nombre: "NY Stars",
    precio: 350,
    src: "assets/img/hatsproyecto/7.jpg",
  },
  {
    id: 8,
    nombre: "Sox",
    precio: 350,
    src: "assets/img/hatsproyecto/8.jpg",
  },
  {
    id: 9,
    nombre: "Giants",
    precio: 350,
    src: "assets/img/hatsproyecto/9.jpg",
  },
  {
    id: 10,
    nombre: "NY Gray",
    precio: 350,
    src: "assets/img/hatsproyecto/10.jpg",
  },
  {
    id: 11,
    nombre: "LA Gray",
    precio: 350,
    src: "assets/img/hatsproyecto/11.jpg",
  },
  {
    id: 12,
    nombre: "NY White",
    precio: 350,
    src: "assets/img/hatsproyecto/12.jpg",
  },
  {
    id: 13,
    nombre: "Angels White",
    precio: 350,
    src: "assets/img/hatsproyecto/13.jpg",
  },
  {
    id: 14,
    nombre: "LA K/B",
    precio: 350,
    src: "assets/img/hatsproyecto/14.jpeg",
  },
  {
    id: 15,
    nombre: "LA Kaki",
    precio: 350,
    src: "assets/img/hatsproyecto/15.jpg",
  },
  {
    id: 16,
    nombre: "LA W/B",
    precio: 350,
    src: "assets/img/hatsproyecto/16.jpg",
  },
  {
    id: 17,
    nombre: "NY R/B",
    precio: 350,
    src: "assets/img/hatsproyecto/17.jpg",
  },
  {
    id: 18,
    nombre: "LA R/B",
    precio: 350,
    src: "assets/img/hatsproyecto/18.jpg",
  },
  {
    id: 19,
    nombre: "LA K/B",
    precio: 350,
    src: "assets/img/hatsproyecto/19.jpg",
  },
  {
    id: 20,
    nombre: "NY K/B",
    precio: 350,
    src: "assets/img/hatsproyecto/20.jpg",
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
  {
    id: 23,
    nombre: "LA B/B",
    precio: 350,
    src: "assets/img/hatsproyecto/23.jpg",
  },
  {
    id: 24,
    nombre: "LA K/Stars",
    precio: 350,
    src: "assets/img/hatsproyecto/24.jpg",
  },
  {
    id: 25,
    nombre: "Braves",
    precio: 350,
    src: "assets/img/hatsproyecto/25.jpeg",
  },
  {
    id: 26,
    nombre: "NY Brown",
    precio: 350,
    src: "assets/img/hatsproyecto/26.jpg",
  },
  {
    id: 27,
    nombre: "NY W/B",
    precio: 350,
    src: "assets/img/hatsproyecto/27.jpg",
  },
  {
    id: 28,
    nombre: "LA W/B",
    precio: 350,
    src: "assets/img/hatsproyecto/28.jpg",
  },
];

const arrayCarrito = [];

const btnp1 = document.getElementById("btn-p1");
const btnp2 = document.getElementById("btn-p2");
const btnp3 = document.getElementById("btn-p3");
const btnp4 = document.getElementById("btn-p4");
const btnp5 = document.getElementById("btn-p5");
const btnp6 = document.getElementById("btn-p6");
const btnp7 = document.getElementById("btn-p7");
const btnp8 = document.getElementById("btn-p8");
const btnp9 = document.getElementById("btn-p9");
const btnp10 = document.getElementById("btn-p10");
const btnp11 = document.getElementById("btn-p11");
const btnp12 = document.getElementById("btn-p12");
const btnp13 = document.getElementById("btn-p13");
const btnp14 = document.getElementById("btn-p14");
const btnp15 = document.getElementById("btn-p15");
const btnp16 = document.getElementById("btn-p16");
const btnp17 = document.getElementById("btn-p17");
const btnp18 = document.getElementById("btn-p18");
const btnp19 = document.getElementById("btn-p19");
const btnp20 = document.getElementById("btn-p20");
const btnp21 = document.getElementById("btn-p21");
const btnp22 = document.getElementById("btn-p22");
const btnp23 = document.getElementById("btn-p23");
const btnp24 = document.getElementById("btn-p24");
const btnp25 = document.getElementById("btn-p25");
const btnp26 = document.getElementById("btn-p26");
const btnp27 = document.getElementById("btn-p27");
const btnp28 = document.getElementById("btn-p28");


const btnminusp1 = document.getElementById("counterminusp1");
const cantidadp1 = document.getElementById("cantidadp1");
const btnplusp1 = document.getElementById("counterplusp1");

const btnminusp2 = document.getElementById("counterminusp2");
const cantidadp2 = document.getElementById("cantidadp2");
const btnplusp2 = document.getElementById("counterplusp2");

const btnminusp3 = document.getElementById("counterminusp3");
const cantidadp3 = document.getElementById("cantidadp3");
const btnplusp3 = document.getElementById("counterplusp3");

const btnminusp4 = document.getElementById("counterminusp4");
const cantidadp4 = document.getElementById("cantidadp4");
const btnplusp4 = document.getElementById("counterplusp4");

const btnminusp5 = document.getElementById("counterminusp5");
const cantidadp5 = document.getElementById("cantidadp5");
const btnplusp5 = document.getElementById("counterplusp5");

const btnminusp6 = document.getElementById("counterminusp6");
const cantidadp6 = document.getElementById("cantidadp6");
const btnplusp6 = document.getElementById("counterplusp6");

const btnminusp7 = document.getElementById("counterminusp7");
const cantidadp7 = document.getElementById("cantidadp7");
const btnplusp7 = document.getElementById("counterplusp7");

const btnminusp8 = document.getElementById("counterminusp8");
const cantidadp8 = document.getElementById("cantidadp8");
const btnplusp8 = document.getElementById("counterplusp8");

const btnminusp9 = document.getElementById("counterminusp9");
const cantidadp9 = document.getElementById("cantidadp9");
const btnplusp9 = document.getElementById("counterplusp9");

const btnminusp10 = document.getElementById("counterminusp10");
const cantidadp10 = document.getElementById("cantidadp10");
const btnplusp10 = document.getElementById("counterplusp10");

const btnminusp11 = document.getElementById("counterminusp11");
const cantidadp11 = document.getElementById("cantidadp11");
const btnplusp11 = document.getElementById("counterplusp11");

const btnminusp12 = document.getElementById("counterminusp12");
const cantidadp12 = document.getElementById("cantidadp12");
const btnplusp12 = document.getElementById("counterplusp12");

const btnminusp13 = document.getElementById("counterminusp13");
const cantidadp13 = document.getElementById("cantidadp13");
const btnplusp13 = document.getElementById("counterplusp13");

const btnminusp14 = document.getElementById("counterminusp14");
const cantidadp14 = document.getElementById("cantidadp14");
const btnplusp14 = document.getElementById("counterplusp14");

const btnminusp15 = document.getElementById("counterminusp15");
const cantidadp15 = document.getElementById("cantidadp15");
const btnplusp15 = document.getElementById("counterplusp15");

const btnminusp16 = document.getElementById("counterminusp16");
const cantidadp16 = document.getElementById("cantidadp16");
const btnplusp16 = document.getElementById("counterplusp16");

const btnminusp17 = document.getElementById("counterminusp17");
const cantidadp17 = document.getElementById("cantidadp17");
const btnplusp17 = document.getElementById("counterplusp17");

const btnminusp18 = document.getElementById("counterminusp18");
const cantidadp18 = document.getElementById("cantidadp18");
const btnplusp18 = document.getElementById("counterplusp18");

const btnminusp19 = document.getElementById("counterminusp19");
const cantidadp19 = document.getElementById("cantidadp19");
const btnplusp19 = document.getElementById("counterplusp19");

const btnminusp20 = document.getElementById("counterminusp20");
const cantidadp20 = document.getElementById("cantidadp20");
const btnplusp20 = document.getElementById("counterplusp20");

const btnminusp21 = document.getElementById("counterminusp21");
const cantidadp21 = document.getElementById("cantidadp21");
const btnplusp21 = document.getElementById("counterplusp21");

const btnminusp22 = document.getElementById("counterminusp22");
const cantidadp22 = document.getElementById("cantidadp22");
const btnplusp22 = document.getElementById("counterplusp22");

const btnminusp23 = document.getElementById("counterminusp23");
const cantidadp23 = document.getElementById("cantidadp23");
const btnplusp23 = document.getElementById("counterplusp23");

const btnminusp24 = document.getElementById("counterminusp24");
const cantidadp24 = document.getElementById("cantidadp24");
const btnplusp24 = document.getElementById("counterplusp24");

const btnminusp25 = document.getElementById("counterminusp25");
const cantidadp25 = document.getElementById("cantidadp25");
const btnplusp25 = document.getElementById("counterplusp25");

const btnminusp26 = document.getElementById("counterminusp26");
const cantidadp26 = document.getElementById("cantidadp26");
const btnplusp26 = document.getElementById("counterplusp26");

const btnminusp27 = document.getElementById("counterminusp27");
const cantidadp27 = document.getElementById("cantidadp27");
const btnplusp27 = document.getElementById("counterplusp27");

const btnminusp28 = document.getElementById("counterminusp28");
const cantidadp28 = document.getElementById("cantidadp28");
const btnplusp28 = document.getElementById("counterplusp28");

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

btnp2.addEventListener("click", () => {
  const idItem = 2;
  const d2 = document.createElement("div");
  d2.classList.add("productReview");

  const cantidad = parseInt(cantidadp2.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d2);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp2.textContent = "0";
});

btnp3.addEventListener("click", () => {
  const idItem = 3;
  const d3 = document.createElement("div");
  d3.classList.add("productReview");

  const cantidad = parseInt(cantidadp3.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d3);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp3.textContent = "0";
});

btnp4.addEventListener("click", () => {
  const idItem = 4;
  const d4 = document.createElement("div");
  d4.classList.add("productReview");

  const cantidad = parseInt(cantidadp4.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d4);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp4.textContent = "0";
});

btnp5.addEventListener("click", () => {
  const idItem = 5;
  const d5 = document.createElement("div");
  d5.classList.add("productReview");

  const cantidad = parseInt(cantidadp5.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d5);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp5.textContent = "0";
});

btnp6.addEventListener("click", () => {
  const idItem = 6;
  const d6 = document.createElement("div");
  d6.classList.add("productReview");

  const cantidad = parseInt(cantidadp6.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d6);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp6.textContent = "0";
});

btnp7.addEventListener("click", () => {
  const idItem = 7;
  const d7 = document.createElement("div");
  d7.classList.add("productReview");

  const cantidad = parseInt(cantidadp7.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d7);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp7.textContent = "0";
});

btnp8.addEventListener("click", () => {
  const idItem = 8;
  const d8 = document.createElement("div");
  d8.classList.add("productReview");

  const cantidad = parseInt(cantidadp8.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d8);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp8.textContent = "0";
});

btnp9.addEventListener("click", () => {
  const idItem = 9;
  const d9 = document.createElement("div");
  d9.classList.add("productReview");

  const cantidad = parseInt(cantidadp9.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d9);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp9.textContent = "0";
});

btnp10.addEventListener("click", () => {
  const idItem = 10;
  const d10 = document.createElement("div");
  d10.classList.add("productReview");

  const cantidad = parseInt(cantidadp10.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d10);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp10.textContent = "0";
});

btnp11.addEventListener("click", () => {
  const idItem = 11;
  const d11 = document.createElement("div");
  d11.classList.add("productReview");

  const cantidad = parseInt(cantidadp11.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d11);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp11.textContent = "0";
});

btnp12.addEventListener("click", () => {
  const idItem = 12;
  const d12 = document.createElement("div");
  d12.classList.add("productReview");

  const cantidad = parseInt(cantidadp12.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d12);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp12.textContent = "0";
});

btnp13.addEventListener("click", () => {
  const idItem = 13;
  const d13 = document.createElement("div");
  d13.classList.add("productReview");

  const cantidad = parseInt(cantidadp13.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d13);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp13.textContent = "0";
});

btnp14.addEventListener("click", () => {
  const idItem = 14;
  const d14 = document.createElement("div");
  d14.classList.add("productReview");

  const cantidad = parseInt(cantidadp14.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d14);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp14.textContent = "0";
});

btnp15.addEventListener("click", () => {
  const idItem = 15;
  const d15 = document.createElement("div");
  d15.classList.add("productReview");

  const cantidad = parseInt(cantidadp15.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d15);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp15.textContent = "0";
});

btnp16.addEventListener("click", () => {
  const idItem = 16;
  const d16 = document.createElement("div");
  d16.classList.add("productReview");

  const cantidad = parseInt(cantidadp16.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d16);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp16.textContent = "0";
});

btnp17.addEventListener("click", () => {
  const idItem = 17;
  const d17 = document.createElement("div");
  d17.classList.add("productReview");

  const cantidad = parseInt(cantidadp17.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d17);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp17.textContent = "0";
});

btnp18.addEventListener("click", () => {
  const idItem = 18;
  const d18 = document.createElement("div");
  d18.classList.add("productReview");

  const cantidad = parseInt(cantidadp18.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d18);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp18.textContent = "0";
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

btnp20.addEventListener("click", () => {
  const idItem = 20;
  const d20 = document.createElement("div");
  d20.classList.add("productReview");

  const cantidad = parseInt(cantidadp20.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d20);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp20.textContent = "0";
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

btnp23.addEventListener("click", () => {
  const idItem = 23;
  const d23 = document.createElement("div");
  d23.classList.add("productReview");

  const cantidad = parseInt(cantidadp23.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d23);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp23.textContent = "0";
});

btnp24.addEventListener("click", () => {
  const idItem = 24;
  const d24 = document.createElement("div");
  d24.classList.add("productReview");

  const cantidad = parseInt(cantidadp24.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d24);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp24.textContent = "0";
});

btnp25.addEventListener("click", () => {
  const idItem = 25;
  const d25 = document.createElement("div");
  d25.classList.add("productReview");

  const cantidad = parseInt(cantidadp25.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d25);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp25.textContent = "0";
});

btnp26.addEventListener("click", () => {
  const idItem = 26;
  const d26 = document.createElement("div");
  d26.classList.add("productReview");

  const cantidad = parseInt(cantidadp26.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d26);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp26.textContent = "0";
});

btnp27.addEventListener("click", () => {
  const idItem = 27;
  const d27 = document.createElement("div");
  d27.classList.add("productReview");

  const cantidad = parseInt(cantidadp27.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d27);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp27.textContent = "0";
});

btnp28.addEventListener("click", () => {
  const idItem = 28;
  const d28 = document.createElement("div");
  d28.classList.add("productReview");

  const cantidad = parseInt(cantidadp28.textContent);
  if (cantidad === 0) {
    alert("Por favor, selecciona una cantidad mayor a 0");
    return;
  } else {
    

    crearElementoDivCarrito(idItem, cantidad, d28);
  }
  console.log("parte final del evento");
  alert("Producto agregado al carrito");
  cantidadp28.textContent = "0";
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

btnminusp2.addEventListener("click", () => {
  if (cantidadp2.textContent === "0") {
    cantidadp2.textContent = "0";
  } else {
    cantidadp2.textContent = parseInt(cantidadp2.textContent) - 1;
  }
});
btnplusp2.addEventListener("click", () => {
  cantidadp2.textContent = parseInt(cantidadp2.textContent) + 1;
});

btnminusp3.addEventListener("click", () => {
  if (cantidadp3.textContent === "0") {
    cantidadp3.textContent = "0";
  } else {
    cantidadp3.textContent = parseInt(cantidadp3.textContent) - 1;
  }
});
btnplusp3.addEventListener("click", () => {
  cantidadp3.textContent = parseInt(cantidadp3.textContent) + 1;
});

btnminusp4.addEventListener("click", () => {
  if (cantidadp4.textContent === "0") {
    cantidadp4.textContent = "0";
  } else {
    cantidadp4.textContent = parseInt(cantidadp4.textContent) - 1;
  }
});
btnplusp4.addEventListener("click", () => {
  cantidadp4.textContent = parseInt(cantidadp4.textContent) + 1;
});

btnminusp5.addEventListener("click", () => {
  if (cantidadp5.textContent === "0") {
    cantidadp5.textContent = "0";
  } else {
    cantidadp5.textContent = parseInt(cantidadp5.textContent) - 1;
  }
});
btnplusp5.addEventListener("click", () => {
  cantidadp5.textContent = parseInt(cantidadp5.textContent) + 1;
});

btnminusp6.addEventListener("click", () => {
  if (cantidadp6.textContent === "0") {
    cantidadp6.textContent = "0";
  } else {
    cantidadp6.textContent = parseInt(cantidadp6.textContent) - 1;
  }
});
btnplusp6.addEventListener("click", () => {
  cantidadp6.textContent = parseInt(cantidadp6.textContent) + 1;
});

btnminusp7.addEventListener("click", () => {
  if (cantidadp7.textContent === "0") {
    cantidadp7.textContent = "0";
  } else {
    cantidadp7.textContent = parseInt(cantidadp7.textContent) - 1;
  }
});
btnplusp7.addEventListener("click", () => {
  cantidadp7.textContent = parseInt(cantidadp7.textContent) + 1;
});

btnminusp8.addEventListener("click", () => {
  if (cantidadp8.textContent === "0") {
    cantidadp8.textContent = "0";
  } else {
    cantidadp8.textContent = parseInt(cantidadp8.textContent) - 1;
  }
});
btnplusp8.addEventListener("click", () => {
  cantidadp8.textContent = parseInt(cantidadp8.textContent) + 1;
});

btnminusp9.addEventListener("click", () => {
  if (cantidadp9.textContent === "0") {
    cantidadp9.textContent = "0";
  } else {
    cantidadp9.textContent = parseInt(cantidadp9.textContent) - 1;
  }
});
btnplusp9.addEventListener("click", () => {
  cantidadp9.textContent = parseInt(cantidadp9.textContent) + 1;
});

btnminusp10.addEventListener("click", () => {
  if (cantidadp10.textContent === "0") {
    cantidadp10.textContent = "0";
  } else {
    cantidadp10.textContent = parseInt(cantidadp10.textContent) - 1;
  }
});
btnplusp10.addEventListener("click", () => {
  cantidadp10.textContent = parseInt(cantidadp10.textContent) + 1;
});

btnminusp11.addEventListener("click", () => {
  if (cantidadp11.textContent === "0") {
    cantidadp11.textContent = "0";
  } else {
    cantidadp11.textContent = parseInt(cantidadp11.textContent) - 1;
  }
});
btnplusp11.addEventListener("click", () => {
  cantidadp11.textContent = parseInt(cantidadp11.textContent) + 1;
});

btnminusp12.addEventListener("click", () => {
  if (cantidadp12.textContent === "0") {
    cantidadp12.textContent = "0";
  } else {
    cantidadp12.textContent = parseInt(cantidadp12.textContent) - 1;
  }
});
btnplusp12.addEventListener("click", () => {
  cantidadp12.textContent = parseInt(cantidadp12.textContent) + 1;
});

btnminusp13.addEventListener("click", () => {
  if (cantidadp13.textContent === "0") {
    cantidadp13.textContent = "0";
  } else {
    cantidadp13.textContent = parseInt(cantidadp13.textContent) - 1;
  }
});
btnplusp13.addEventListener("click", () => {
  cantidadp13.textContent = parseInt(cantidadp13.textContent) + 1;
});

btnminusp14.addEventListener("click", () => {
  if (cantidadp14.textContent === "0") {
    cantidadp14.textContent = "0";
  } else {
    cantidadp14.textContent = parseInt(cantidadp14.textContent) - 1;
  }
});
btnplusp14.addEventListener("click", () => {
  cantidadp14.textContent = parseInt(cantidadp14.textContent) + 1;
});

btnminusp15.addEventListener("click", () => {
  if (cantidadp15.textContent === "0") {
    cantidadp15.textContent = "0";
  } else {
    cantidadp15.textContent = parseInt(cantidadp15.textContent) - 1;
  }
});
btnplusp15.addEventListener("click", () => {
  cantidadp15.textContent = parseInt(cantidadp15.textContent) + 1;
});

btnminusp16.addEventListener("click", () => {
  if (cantidadp16.textContent === "0") {
    cantidadp16.textContent = "0";
  } else {
    cantidadp16.textContent = parseInt(cantidadp16.textContent) - 1;
  }
});
btnplusp16.addEventListener("click", () => {
  cantidadp16.textContent = parseInt(cantidadp16.textContent) + 1;
});

btnminusp17.addEventListener("click", () => {
  if (cantidadp17.textContent === "0") {
    cantidadp17.textContent = "0";
  } else {
    cantidadp17.textContent = parseInt(cantidadp17.textContent) - 1;
  }
});
btnplusp17.addEventListener("click", () => {
  cantidadp17.textContent = parseInt(cantidadp17.textContent) + 1;
});

btnminusp18.addEventListener("click", () => {
  if (cantidadp18.textContent === "0") {
    cantidadp18.textContent = "0";
  } else {
    cantidadp18.textContent = parseInt(cantidadp18.textContent) - 1;
  }
});

btnplusp18.addEventListener("click", () => {
  cantidadp18.textContent = parseInt(cantidadp18.textContent) + 1;
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

btnminusp20.addEventListener("click", () => {
  if (cantidadp20.textContent === "0") {
    cantidadp20.textContent = "0";
  } else {
    cantidadp20.textContent = parseInt(cantidadp20.textContent) - 1;
  }
});

btnplusp20.addEventListener("click", () => {
  cantidadp21.textContent = parseInt(cantidadp21.textContent) + 1;
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

btnminusp23.addEventListener("click", () => {
  if (cantidadp23.textContent === "0") {
    cantidadp23.textContent = "0";
  } else {
    cantidadp23.textContent = parseInt(cantidadp23.textContent) - 1;
  }
});

btnplusp23.addEventListener("click", () => {
  cantidadp23.textContent = parseInt(cantidadp23.textContent) + 1;
});

btnminusp24.addEventListener("click", () => {
  if (cantidadp24.textContent === "0") {
    cantidadp24.textContent = "0";
  } else {
    cantidadp24.textContent = parseInt(cantidadp24.textContent) - 1;
  }
});

btnplusp24.addEventListener("click", () => {
  cantidadp24.textContent = parseInt(cantidadp24.textContent) + 1;
});

btnminusp25.addEventListener("click", () => {
  if (cantidadp25.textContent === "0") {
    cantidadp25.textContent = "0";
  } else {
    cantidadp25.textContent = parseInt(cantidadp25.textContent) - 1;
  }
});

btnplusp25.addEventListener("click", () => {
  cantidadp25.textContent = parseInt(cantidadp25.textContent) + 1;
});

btnminusp26.addEventListener("click", () => {
  if (cantidadp26.textContent === "0") {
    cantidadp26.textContent = "0";
  } else {
    cantidadp26.textContent = parseInt(cantidadp26.textContent) - 1;
  }
});

btnplusp26.addEventListener("click", () => {
  cantidadp26.textContent = parseInt(cantidadp26.textContent) + 1;
});

btnminusp27.addEventListener("click", () => {
  if (cantidadp27.textContent === "0") {
    cantidadp27.textContent = "0";
  } else {
    cantidadp27.textContent = parseInt(cantidadp27.textContent) - 1;
  }
});

btnplusp27.addEventListener("click", () => {
  cantidadp27.textContent = parseInt(cantidadp27.textContent) + 1;
});

btnminusp28.addEventListener("click", () => {
  if (cantidadp28.textContent === "0") {
    cantidadp28.textContent = "0";
  } else {
    cantidadp28.textContent = parseInt(cantidadp28.textContent) - 1;
  }
});

btnplusp28.addEventListener("click", () => {
  cantidadp28.textContent = parseInt(cantidadp28.textContent) + 1;
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