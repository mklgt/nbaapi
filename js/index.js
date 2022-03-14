//BOTONES
let btnResultados = document.getElementById('btnResultados');
let btnEquipos = document.getElementById('btnEquipos');
let btnJugadores = document.getElementById('btnJugadores');
//DIVS DE CONTENIDO
let inicio = document.getElementById('inicio');
let dropdown = document.getElementById('dropdown')
let resultados = document.getElementById('resultados');
let equipos = document.getElementById('equipos');
let jugadores = document.getElementById('cartasJugadores');
let divs = [inicio, dropdown, resultados, equipos, jugadores]
//DONDE PONER EL CONTENIDO
let tablaResultados = document.getElementById('tablaResultados');
let acordeonEquipos = document.getElementById('acordeonEquipos');
let cartasJugadores = document.getElementById('cartasJugadores');
let breadcrumb = document.getElementById('breadcrumb');

import * as metodos from './consulta.js';

function inicializar() {
    btnResultados.addEventListener('click', function () {
        cambiarBreadcrumb("Resultados")
        mostrar(resultados);
    });
    btnEquipos.addEventListener('click', function () {
        cambiarBreadcrumb("Equipos")
        mostrar(equipos);
    });
    btnJugadores.addEventListener('click', function () {
        cambiarBreadcrumb("Jugadores")
        mostrar(jugadores);
    });
    dropdown.addEventListener('click', function (e) {
        switch (e.target.text) {
            case "Resultados":
                cambiarBreadcrumb("Resultados")
                mostrar(resultados);
                break;

            case "Equipos":
                cambiarBreadcrumb("Equipos")
                mostrar(equipos);
                break;
            case "Jugadores":
                cambiarBreadcrumb("Jugadores")
                mostrar(jugadores);
                break;
        }
    });
    metodos.obtenerInfo('games')
    metodos.obtenerInfo('teams')
    metodos.obtenerInfo('players')
}

function cambiarBreadcrumb(opcion) {
    breadcrumb.innerHTML = `
    <li class="breadcrumb-item"><a href="index.html">Página principal</a></li>
    <li class="breadcrumb-item active" aria-current="page">${opcion}</li>`;
}

function mostrar(opcion) {
    divs.forEach(div => {
        if (div == opcion) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    })
}

window.addEventListener('load', function () {
    inicializar();
});



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});