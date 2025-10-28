// Menu Hamburguer

const botaohamburguer = document.querySelector('#btnHamburguer');
const menuMobile = document.querySelector('#menu-mobile');

botaohamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
})