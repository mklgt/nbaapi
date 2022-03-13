const URL_ROOT = "https://balldontlie.io/api/v1/";

function crearURL(opcion) {
    return `${URL_ROOT}${opcion}`;
}

const obtenerInfo = (opcion) => {
    fetch(crearURL(opcion), {
            method: 'GET',
            mode: 'no-cors',
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,**;q=0.8',
                'Host': 'www.balldontlie.io'
            })
        })
        .then(response => response.json())
        .then(json => {

            switch (opcion) {
                case "games":
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


                    break;

                case "teams":


                    break;
                case "players":


                    break;
            }
        })
}




export {
    obtenerInfo
}