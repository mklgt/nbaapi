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
                        let jornada = resultados.date.substring(0, 11);
                        let temporada = resultados.season;
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



            break;
        case "players":



            break;
    }



}
export {
    obtenerInfo
}