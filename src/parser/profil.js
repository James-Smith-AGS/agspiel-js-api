const cheerio = require("cheerio");
const {Ag, Aktie, Anleihe, Ceo, Kredit, Order, Zertifikat, Index} = require("../models");

function profil([page, api]) {
    const $ = cheerio.load(page.data);
    const ag = new Ag();
    ag.wkn = parseInt(page.config.url.split("&aktie=")[1]);
    // Daten aus API
    ag.name = api.data.ags[String(ag.wkn)].name;
    ag.gruendung = new Date(api.data.ags[String(ag.wkn)].gruendung);
    ag.aktienzahl = api.data.ags[String(ag.wkn)].aktienanzahl;
    ag.in_liquidation = api.data.ags[String(ag.wkn)].in_liquidation;
    ag.kurs = api.data.ags[String(ag.wkn)].kurs;
    ag.brief = api.data.ags[String(ag.wkn)].brief;
    ag.geld = api.data.ags[String(ag.wkn)].geld;
    ag.brief_stueckzahl = api.data.ags[String(ag.wkn)].brief_stueckzahl;
    ag.geld_stueckzahl = api.data.ags[String(ag.wkn)].geld_stueckzahl;
    ag.depotwert = api.data.ags[String(ag.wkn)].depotwert;
    ag.bargeld = api.data.ags[String(ag.wkn)].bargeld;
    ag.highscore = api.data.ags[String(ag.wkn)].highscore_platz;
    ag.highscore_groesse = api.data.ags[String(ag.wkn)].highscore_platz_groesse;
    ag.highscore_wachstum = api.data.ags[String(ag.wkn)].highscore_platz_wachstum;
    ag.highscore_newcomer = api.data.ags[String(ag.wkn)].highscore_platz_newcomer;
    ag.agsx_punkte = api.data.ags[String(ag.wkn)].agsx_punkte;
    ag.in_agsx = api.data.ags[String(ag.wkn)].in_agsx;
    ag.handelsaktivitaet = api.data.ags[String(ag.wkn)].handelsaktivitaet;
    ag.aktien = [];
    ag.anleihen = [];
    ag.kredite = [];
    ag.zertifikate = [];
    ag.orders = [];
    // Add Aktien-Obj to AG-Obj
    for (const i of api.data.ags[String(ag.wkn)].aktien) {
        ag.aktien.push(new Aktie(i.wkn, i.stueckzahl));  
    }
    // Add Anleihen-Obj to AG-Obj
    for (const i of api.data.ags[String(ag.wkn)].anleihen) {
        ag.anleihen.push(new Anleihe(i.betrag, i.zins, new Date(i.auszahlung_datum), i.laufzeit));  
    }
    // Add Kredite-Obj to AG-Obj
    for (const i of api.data.ags[String(ag.wkn)].kredite) {
        ag.kredite.push(new Kredit(i.betrag, i.zins, new Date(i.rueckzahlung_datum), i.laufzeit));  
    }
    // Add Zertifikate-Obj to AG-Obj
    for (const i of api.data.ags[String(ag.wkn)].zertifikate) {
        ag.zertifikate.push(new Zertifikat(i.betrag, i.typ, i.hebel, i.punkte, new Date(i.ablauf_datum)));  
    }
    // Add Orders-Obj to AG-Obj
    for (const i of api.data.ags[String(ag.wkn)].orders) {
        ag.orders.push(new Order(i.typ, i.limit, i.stueckzahl, i.orderregel, i.systembank_order, new Date(i.datum)));  
    }

    // Daten aus Profil-Page
    const weitere_infos = $(".padding5").find("tbody").find("td");
    const performance_tab = $(".normalborder")[0].children[1];
    function perf(row, col) {
        let p = performance_tab.children[row].children[col].children[0];
        if (p.type === 'tag')
          return parseFloat(p.children[0].data.replace(".","").replace(",","."));
    }
    ag.bw_aktie = parseFloat($("bwproaktie").text().trim().replace("BW/Aktie(?) ", "").replace(" €","").replace(".","").replace(",","."))
    ag.sw_aktie = parseFloat($("#sw").text().trim().replace("SW/Aktie(?) ", "").replace(" €","").replace(".","").replace(",","."));
    ag.bbw_aktie = parseFloat($("#bbw").text().trim().replace("BBW(?)", "").replace(" €","").replace(".","").replace(",","."));
    ag.fp_aktie = parseFloat($("#fp").text().trim().replace("FP/Aktie(?) ", "").replace(" €","").replace(".","").replace(",","."));
    ag.kgv = parseFloat($("#kgv").text().trim().replace("KGV(?)", "").replace(".","").replace(",","."));
    ag.dividende = parseFloat(weitere_infos[7].children[0].data.replace("%", "").replace(".","").replace(",","."));
    ag.max_zertis = parseFloat(weitere_infos[9].children[0].data.replace("%", "").replace(".","").replace(",","."));
    ag.tagesvolumen = 0;
    ag.schutz = weitere_infos[17].children[0].data.trim() === "ja" ? true : false;
    ag.tages_hoch = parseFloat(weitere_infos[19].children[0].data.replace(" €","").replace(".","").replace(",","."));
    ag.tages_tief = parseFloat(weitere_infos[21].children[0].data.replace(" €","").replace(".","").replace(",","."));
    ag.kurs_14d = perf(2, 5);
    ag.kurs_30d = perf(4, 3);
    ag.kurs_60d = perf(6, 3);
    ag.kurs_90d = perf(8, 3);
    ag.bw_14d = perf(12, 5);
    ag.bw_30d = perf(14, 3);
    ag.bw_60d = perf(16, 3);
    ag.bw_90d = perf(18, 3);
    ag.fp_14d = perf(22, 5);
    ag.fp_30d = perf(24, 3);
    ag.fp_60d = perf(26, 3);
    ag.fp_90d = perf(28, 3);

    // Ceo Object
    const ceo = new Ceo();
    ceo.name = api.data.ags[String(ag.wkn)].ceo.name;
    ceo.index = api.data.ags[String(ag.wkn)].index_id
    ceo.reg_datum = new Date(api.data.ags[String(ag.wkn)].ceo.registrierung_datum);
    ceo.isUserproject = api.data.ags[String(ag.wkn)].ceo.ist_userprojekt_account;
    ceo.isGesperrt = api.data.ags[String(ag.wkn)].ceo.gesperrt;
    if (page.data.includes("premium.png")) {
        ceo.premium = 1;
    } else if (page.data.includes("premium_gold.png")) {
        ceo.premium = 2;
    }  else {
        ceo.premium = 0;
    }
    ag.ceo = ceo;

    // Index Object
    let indexId = api.data.ags[String(ag.wkn)].index_id;
    if (indexId) {
        ag.index = new Index(indexId, api.data.indizes[String(indexId)].name, api.data.indizes[String(indexId)].highscore_platz,
                            api.data.indizes[String(indexId)].punkte, new Date(api.data.indizes[String(indexId)].gruendung_datum));
    } else {
        ag.index = null;
    }
    return ag;
}

module.exports = profil;