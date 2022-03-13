const URL_ROOT = "https://balldontlie.io/api/v1/";

function crearURL(opcion) {
    return `${URL_ROOT}${opcion}`;
}

const obtenerInfo = (opcion) => {
    switch (opcion) {
        case "games":

            fetch('https://www.balldontlie.io/api/v1/games')
                .then(response => response.json(), {
                    method: 'GET',
                    mode: 'no-cors',
                })
                .then(json => {
                    Array.from(json.data).map(resultado => {
                        let jornada = resultado.date.substring(0, 11);
                        let temporada = resultado.season;
                        let local = resultado.home_team.name;
                        let visitante = resultado.visitor_team.name;
                        let puntuacionLocal = resultado.home_team_score;
                        let puntuacionVisitante = resultado.visitor_team_score;
                        let ganador;
                        if (puntuacionLocal > puntuacionVisitante) {
                            ganador = local;
                        } else {
                            ganador = visitante;
                        }
                        tablaResultados.innerHTML += `<tr>
                    <td headers="jornada" scope="row">${jornada}</td>
                    <td headers="temporada">${temporada}</td>
                    <td headers="local">${local}</td>
                    <td headers="visitante">${visitante}</td>
                    <td headers="resultadoLocal">${puntuacionLocal}</td>
                    <td headers="resultadoVisitante">${puntuacionVisitante}</td>
                    <td headers="equipoGanador" class="font-weight-bold">${ganador}</td>`;
                    })
                })

            break;

        case "teams":
            fetch('https://www.balldontlie.io/api/v1/teams')
                .then(response => response.json())
                .then(json => {
                    Array.from(json.data).map(equipo => {
                        let nombreCompleto = equipo.full_name;
                        let nombre = equipo.name;
                        let abreviacion = equipo.abbreviation;
                        let ciudad = equipo.city;
                        let conferencia = equipo.conference;
                        acordeonEquipos.innerHTML += `<div id="acordeon"><div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#equipo${abreviacion}" aria-expanded="false" aria-controls="equipo${abreviacion}">
                                    <span data-toggle="tooltip" data-placement="right" title="${nombreCompleto}">${nombre}<span></button></h2></div>
                                    <div id="equipo${abreviacion}" class="collapse" aria-labelledby="headingOne" data-parent="#acordeon">
                                    <div class="card-body text-left">
                                        <ul><li>Nombre completo: ${nombreCompleto}</li>
                                        <li>Abreviación: ${abreviacion}</li><li>Ciudad: ${ciudad}</li>
                                        <li>Conferencia: ${conferencia}</li></ul></div></div></div>`;

                    })
                })


            break;
        case "players":

            fetch('https://www.balldontlie.io/api/v1/players')
                .then(response => response.json())
                .then(json => {
                    let html = "";
                    let cont = 0;
                    Array.from(json.data).map(jugador => {
                        console.log("Inicio foreach->" + cont)
                        if (cont == 0) {
                            html += '<div class="row">';
                        }
                        cont += 1;
                        console.log("Antes de hacer todo->" + cont)
                        let nombre = jugador.first_name;
                        let nombreCompleto = jugador.first_name + " " + jugador.last_name;
                        let posicion = jugador.position;
                        let equipo = jugador.team.full_name;
                        html += `<div class="col-sm-12 col-lg-4 mb-3">
                        <div class="card border rounded" data-toggle="modal" data-target="#${nombre}">
                            <div class="card-body">
                                <img src="./img/curry.png" class="card-img-top rounded" style="width: 25%;">
                                <h5 class="card-title">${nombreCompleto}</h5>
                            </div>
                        </div>
        
                        <div class="modal fade" id="${nombre}" data-backdrop="static" data-keyboard="false" tabindex="-1"
                            aria-labelledby="${nombreCompleto}Label" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Jugador</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body text-left m-0">
                                        <div class="row">
                                            <div class="col-6">
                                                <p>Nombre Apellidos: ${nombreCompleto}</p>
                                                <p>Posicion: ${posicion}</p>
                                                <p>Equipo (nombre completo): ${equipo}</p>
                                            </div>
                                            <div class="col-6">
                                                <img src="./img/curry.png" class="border rounded" style="width: 100%;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer mx-auto">
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                        console.log("Antes 2º IF->" + cont)
                        if (cont == 3) {
                            cont = 0;
                            html += '</div>';
                        }
                        console.log("Fin->" + cont)
                        
                    })
                    cartasJugadores.innerHTML+=html;
                })

            break;
    }



}
export {
    obtenerInfo
}