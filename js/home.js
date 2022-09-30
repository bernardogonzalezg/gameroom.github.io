"use strict";

document.querySelector(".burguer").addEventListener("click", mostrarMenu);

function mostrarMenu() {
    document.querySelector(".menu").classList.toggle("show");
}