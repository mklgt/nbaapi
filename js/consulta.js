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
                    console.log(json)
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
                        console.log(resultados.date)
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



            break;
    }



}
export {
    obtenerInfo
}