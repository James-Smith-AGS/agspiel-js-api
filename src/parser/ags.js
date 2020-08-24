const {AgOfList} = require("../models");

function agListe(api) {
    const agWknListe = [];
    for (const wkn in api.data.ags) {
        if (api.data.ags.hasOwnProperty(wkn)) {
            const element = api.data.ags[wkn];
            agWknListe.push(element.wkn)
        }
    }
    agWknListe.sort((a, b) => a - b);
    const ags = [];
    for (const wkn of agWknListe) {
        ags.push(new AgOfList(wkn, api.data.ags[String(wkn)].name, api.data.ags[String(wkn)].ceo.name));
    }
    return ags;
}

module.exports = agListe;