//BOTONES
let btnResultados = document.getElementById('btnResultados');
let btnEquipos = document.getElementById('btnEquipos');
let btnJugadores = document.getElementById('btnJugadores');
//DIVS DE CONTENIDO
let resultados = document.getElementById('resultados');
let equipos = document.getElementById('equipos');
let jugadores = document.getElementById('jugadores');
//DONDE PONER EL CONTENIDO
let tablaResultados = document.getElementById('tablaResultados');
let acordeonEquipos = document.getElementById('acordeonEquipos')

import * as metodos from './consulta.js';
function inicializar(){
    /*document.getElementById('opciones').addEventListener('change', function (e) {
        seleccionObjeto(e.target.value);
    });*/
    metodos.obtenerInfo('games')
    //metodos.obtenerInfo('teams')
    //metodos.obtenerInfo('players')
}
window.addEventListener('load', function () {
    inicializar();
});



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

