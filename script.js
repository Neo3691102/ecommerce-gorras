const cartIcon = document.getElementById("carticon");
const closecart = document.getElementById("closecart");
const cart = document.getElementById("cartsection");

cartIcon.addEventListener("click", () => {
    cart.classList.add("visible");
})

closecart.addEventListener("click", () => {
    cart.classList.remove("visible");
    console.log("carrito cerrado")
})