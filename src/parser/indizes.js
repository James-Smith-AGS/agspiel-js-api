const {Index} = require("../models");

function indizesListe(api) {
    const indexIdListe = []
    for (const indexId in api.data.indizes) {
        if (api.data.indizes.hasOwnProperty(indexId)) {
            const element = api.data.indizes[indexId];
            indexIdListe.push(element.id)
        }
    }
    indexIdListe.sort((a, b) => a - b);
    const indizes = [];
    for (const id of indexIdListe) {
        indizes.push(new Index(id, api.data.indizes[String(id)].name, api.data.indizes[String(id)].highscore_platz, 
                                api.data.indizes[String(id)].punkte, new Date(api.data.indizes[String(id)].gruendung_datum)));
    }
    return indizes;
}

module.exports = indizesListe;