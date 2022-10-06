"use strict"

// MUNES DESPLEGBLES

document.querySelector(".burger").addEventListener("click", mostrarMenu);

function mostrarMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

document.querySelector(".btnUser").addEventListener("click", mostrarMenuUsuario);

function mostrarMenuUsuario() {
    document.querySelector(".user").classList.toggle("showUser");
}