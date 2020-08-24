const assert = require("assert");
const api = require("./data/apiv5.json");
const parse = require("../src/parser");
const { isObject } = require("util");
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
//const chronik = require("./data/chronik.json");

console.log(`Testing for API-Version: ${api.data.api_version}`);

describe("Testing API-Parser", () => {
    it("should parse Index-Liste", () => {
        const result = parse.indizes(api);
        assert.equal(typeof result, typeof []);
        assert.equal(isObject(result[0]), true);
        assert.equal(result[0].id , 7);
        assert.equal(result[0].name , "SAX - Solider Aktienindex");
    });

    it("should parse AG-Liste", () => {
        const result = parse.ags(api);
        assert.equal(Array.isArray(result), true);
        assert.equal(isObject(result[0]), true);
        assert.equal(result[0].wkn , 100001);
        assert.equal(result[0].name , "Rady");
        assert.equal(result[0].ceo , "Rady");
    });
});

describe("Testing Website-Parser", () => {
    it("should parse Chronik of Website", () => {
        //console.log(chronik);
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/chronik.html")));
        let data = {"data": $.html()};
        let result = parse.chronik(data);
        assert.equal(isObject(result), true);
        assert.equal(result.regname, "Smith AG");
        assert.equal(Array.isArray(result.uebernahmen), true);
        assert.equal(Array.isArray(result.kes), true);
        assert.equal(Array.isArray(result.khs), true);
        assert.equal(Array.isArray(result.namenswechsel), true);
    });

    it("should parse Bilanz of Website", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/bilanz.html")));
        let data = {"data": $.html()};
        let result = parse.bilanzen(data);
        assert.equal(Array.isArray(result), true);
        assert.equal(isObject(result[0]), true);
        assert.equal(result[result.length - 1].aktienzahl, 1000000);
        assert.equal(result[result.length - 1].kurs, 3.4);
        assert.equal(result[result.length - 1].aktiendepot, 193844);
        assert.equal(result[result.length - 1].anleihendepot, 850000);
        assert.equal(result[result.length - 1].kreditdepot, 0);
        assert.equal(result[result.length - 1].zertifikatedepot, 0);
        assert.equal(result[result.length - 1].gesamtdepotwert, 1043844);
        assert.equal(result[result.length - 1].bargeld, 5815);
        assert.equal(result[result.length - 1].kfd, 0);
        assert.equal(result[result.length - 1].bwaktie, 1.05);
        assert.equal(result[result.length - 1].platzwachstum, 0);
        assert.equal(result[result.length - 1].platzgroesse, 0);
        assert.equal(result[result.length - 1].platzgesamt, 0);
        assert.equal(result[result.length - 1].fpaktie, 0);
        assert.equal(result[result.length - 1].buchwert, 1049658);
    });

    it("should parse Aktionaersstruktur of Website", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/aktionaere.html")));
        let data = {"data": $.html()};
        let result = parse.aktionaere(data);
        assert.equal(Array.isArray(result), true);
        assert.equal(isObject(result[0]), true);
        assert.equal(result[0].rank, 1);
        assert.equal(result[0].name, "Egel");
        assert.equal(result[0].anzahl, 1190513);
        assert.equal(result[0].aenderung, 0);
    });

    it("should parse Kontoauszug of Page", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/kontoauszug.html")));
        let data = {"data": $.html()};
        let result = parse.kontoauszug(data);
        assert.equal(Array.isArray(result), true);
        assert.equal(isObject(result[0]), true);
        assert.equal(result[0].id, 20904150);
        assert.equal(result[0].datum - result[0].datum, 0);
        assert.equal(result[0].konto, "Aktien");
        assert.equal(result[0].betrag, -49815);
        assert.equal(result[0].vermerk, "Kauf 135 Stk. #172055 (ATLAS) zu 369,00€");
    });
});

describe("Testing Combined-Parser", () => {
    it("should parse AG of API and Profile-Page", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/profil.html")));
        let page = {
            "data": $.html(),
            "config": {
                    "url": "https://www.ag-spiel.de/index.php?section=profil&aktie=140037"
            }
        };
        let result = parse.profil([page, api]);
        assert.equal(isObject(result), true);
        assert.equal(result.wkn, 140037);
        assert.equal(result.name, "Smith AG");
        assert.equal(result.gruendung - result.gruendung, 0);
        assert.equal(result.aktienzahl, 3943847);
        assert.equal(result.in_liquidation, false);
        assert.equal(result.kurs, 1494.01);
        assert.equal(result.brief, 1494.01);
        assert.equal(result.geld, 1454.26);
        assert.equal(result.brief_stueckzahl, 39829);
        assert.equal(result.geld_stueckzahl, 1960);
        assert.equal(result.sw_aktie, 914.73);
        assert.equal(result.bbw_aktie, 1582.56);
        assert.equal(result.fp_aktie, 1164.06);
        assert.equal(result.kgv, 138.54);
        assert.equal(result.tagesvolumen, 0);
        assert.equal(result.depotwert, 8251187763.48);
        assert.equal(result.bargeld, 311174373.64);
        assert.equal(result.highscore, 102);
        assert.equal(result.highscore_groesse, 30);
        assert.equal(result.highscore_wachstum, 456);
        assert.equal(result.highscore_newcomer, 0);
        assert.equal(result.agsx_punkte, 996);
        assert.equal(result.in_agsx, false);
        assert.equal(result.handelsaktivitaet, 41);
        assert.equal(isObject(result.ceo), true);
        assert.equal(result.ceo.name, "James-Smith");
        assert.equal(result.ceo.index, 792);
        assert.equal(result.ceo.reg_datum - result.ceo.reg_datum, 0);
        assert.equal(result.ceo.isGesperrt, false);
        assert.equal(result.ceo.isUserproject, false);
        assert.equal(result.ceo.premium, 2);
        assert.equal(Array.isArray(result.aktien), true);
        assert.equal(isObject(result.aktien[0]), true);
        assert.equal(result.aktien[0].wkn, 173636);
        assert.equal(result.aktien[0].stueckzahl, 27);
        assert.equal(Array.isArray(result.anleihen), true);
        assert.equal(isObject(result.anleihen[0]), true);
        assert.equal(result.anleihen[0].betrag, 100000000);
        assert.equal(result.anleihen[0].zins, 0.2);
        assert.equal(result.anleihen[0].auszahlung_datum - result.anleihen[0].auszahlung_datum, 0);
        assert.equal(result.anleihen[0].laufzeit, 5);
        assert.equal(Array.isArray(result.zertifikate), true);
        assert.equal(Array.isArray(result.orders), true);
        assert.equal(isObject(result.orders[0]), true);
        assert.equal(result.orders[0].typ, "sell");
        assert.equal(result.orders[0].limit, 1494.01);
        assert.equal(result.orders[0].stueckzahl, 7532);
        assert.equal(result.orders[0].isOrderregel, true);
        assert.equal(result.orders[0].isSystembankorder, false);
        assert.equal(result.orders[0].datum - result.orders[0].datum, 0);
        assert.equal(result.dividende, 0);
        assert.equal(result.max_zertis, 1);
        assert.equal(result.tages_hoch, 1531.93);
        assert.equal(result.tages_tief, 1479.11);
        assert.equal(result.kurs_14d, 12.25);
        assert.equal(result.kurs_30d, 7.13);
        assert.equal(result.kurs_60d, 1.79);
        assert.equal(result.kurs_90d, 7.51);
        assert.equal(result.bw_14d, -0.43);
        assert.equal(result.bw_30d, 1.95);
        assert.equal(result.bw_60d, -2.96);
        assert.equal(result.bw_90d, 7.32);
        assert.equal(result.fp_14d, 2.72);
        assert.equal(result.fp_30d, 0.93);
        assert.equal(result.fp_60d, 12.78);
        assert.equal(result.fp_90d, 11.51);
        assert.equal(isObject(result.index), true);
        assert.equal(result.index.id, 792);
        assert.equal(result.index.name, "Extrem Liberaler Index");
        assert.equal(result.index.highscore, 2);
        assert.equal(result.index.punkte, 581);
        assert.equal(result.index.gruendung - result.index.gruendung, 0);
    });
});