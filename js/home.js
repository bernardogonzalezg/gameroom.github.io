"use strict";

//document.querySelector(".burguer").addEventListener("click", mostrarMenu);
document.querySelector("#btn-comprar-Circus").addEventListener("click", GamebuyCircus);   
document.querySelector("#btn-comprar-Tetris").addEventListener("click", GamebuyTetris);  
document.querySelector("#btn-comprar-Galaga").addEventListener("click", GamebuyGalaga);  
document.querySelector("#btn-comprar-Truco").addEventListener("click", GamebuyTruco);
document.querySelector("#btn-comprar-TuteCabrero").addEventListener("click", GamebuyTute);
document.querySelector("#btn-comprar-Uno").addEventListener("click", GamebuyUno);
document.querySelector("#btn-comprar-Goal3").addEventListener("click", GamebuyGoal3);
document.querySelector("#btn-comprar-MicroMachine").addEventListener("click", GamebuyMicromachine);
document.querySelector("#btn-comprar-PingPong").addEventListener("click", GamebuyPingpong);

function mostrarMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

function GamebuyCircus(){
    let carrito = document.querySelector("#cart-inImg-Circus");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTetris(){
    let carrito = document.querySelector("#cart-inImg-Tetris");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyGalaga(){
    let carrito = document.querySelector("#cart-inImg-Galaga");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTruco(){
    let carrito = document.querySelector("#cart-inImg-Truco");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTute(){
    let carrito = document.querySelector("#cart-inImg-Tute");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyUno(){
    let carrito = document.querySelector("#cart-inImg-Uno");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyGoal3(){
    let carrito = document.querySelector("#cart-inImg-Goal3");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyMicromachine(){
    let carrito = document.querySelector("#cart-inImg-MicroMachine");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyPingpong(){
    let carrito = document.querySelector("#cart-inImg-PingPong");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}


//CARRUSELES

const caja = document.querySelector(".caja-carrusel");
const punto = document.querySelectorAll(".punto");

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -25;
        caja.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
    });
    
});

const cajaDos = document.querySelector(".caja-carrusel-dos");
const puntoDos = document.querySelectorAll(".punto-dos");

puntoDos.forEach( (cadaPunto, i) => {
    puntoDos[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -25;
        cajaDos.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            puntoDos[i].classList.remove("activo");
        })
        puntoDos[i].classList.add("activo");
    });
    
});

const cajaTres = document.querySelector(".caja-carrusel-tres");
const puntoTres = document.querySelectorAll(".punto-tres");

puntoTres.forEach( (cadaPunto, i) => {
    puntoTres[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -25;
        cajaTres.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            puntoTres[i].classList.remove("activo");
        })
        puntoTres[i].classList.add("activo");
    });
    
});

document.querySelector(".burger").addEventListener("click", mostrarMenu);

function mostrarMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

document.querySelector(".btnUser").addEventListener("click", mostrarMenuUsuario);

function mostrarMenuUsuario() {
    document.querySelector(".user").classList.toggle("showUser");
}