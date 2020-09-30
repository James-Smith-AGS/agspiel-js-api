const assert = require("assert");
const api = require("./data/apiv5.json");
const parse = require("../src/parser");
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
//const chronik = require("./data/chronik.json");

console.log(`Testing for API-Version: ${api.data.api_version}`);

describe("Testing API-Parser", () => {
    it("should parse Index-Liste", () => {
        const result = parse.indizes(api);
        assert.strictEqual(typeof result, typeof []);
        assert.strictEqual(result[0] instanceof Object, true);
        assert.strictEqual(result[0].id , 7);
        assert.strictEqual(result[0].name , "SAX - Solider Aktienindex");
    });

    it("should parse AG-Liste", () => {
        const result = parse.ags(api);
        assert.strictEqual(Array.isArray(result), true);
        assert.strictEqual(result[0] instanceof Object, true);
        assert.strictEqual(result[0].wkn , 100001);
        assert.strictEqual(result[0].name , "Rady");
        assert.strictEqual(result[0].ceo , "Rady");
    });
});

describe("Testing Website-Parser", () => {
    it("should parse Chronik of Website", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/chronik.html")));
        let data = {"data": $.html()};
        let result = parse.chronik(data);
        assert.strictEqual(result instanceof Object, true);
        assert.strictEqual(result.regname, "Smith AG");
        assert.strictEqual(Array.isArray(result.uebernahmen), true);
        assert.strictEqual(Array.isArray(result.kes), true);
        assert.strictEqual(Array.isArray(result.khs), true);
        assert.strictEqual(Array.isArray(result.namenswechsel), true);
    });

    it("should parse Bilanz of Website", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/bilanz.html")));
        let data = {"data": $.html()};
        let result = parse.bilanzen(data);
        assert.strictEqual(Array.isArray(result), true);
        assert.strictEqual(result[0] instanceof Object, true);
        assert.deepStrictEqual(result[result.length - 1].datum, new Date(Date.UTC("2015-09-30T22:00:00.000Z")))
        assert.strictEqual(result[result.length - 1].aktienzahl, 1000000);
        assert.strictEqual(result[result.length - 1].kurs, 3.4);
        assert.strictEqual(result[result.length - 1].aktiendepot, 193844);
        assert.strictEqual(result[result.length - 1].anleihendepot, 850000);
        assert.strictEqual(result[result.length - 1].kreditdepot, 0);
        assert.strictEqual(result[result.length - 1].zertifikatedepot, 0);
        assert.strictEqual(result[result.length - 1].gesamtdepotwert, 1043844);
        assert.strictEqual(result[result.length - 1].bargeld, 5815);
        assert.strictEqual(result[result.length - 1].kfd, 0);
        assert.strictEqual(result[result.length - 1].bwaktie, 1.05);
        assert.strictEqual(result[result.length - 1].platzwachstum, 0);
        assert.strictEqual(result[result.length - 1].platzgroesse, 0);
        assert.strictEqual(result[result.length - 1].platzgesamt, 0);
        assert.strictEqual(result[result.length - 1].fpaktie, 0);
        assert.strictEqual(result[result.length - 1].buchwert, 1049658);
    });

    it("should parse Aktionaersstruktur of Website", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/aktionaere.html")));
        let data = {"data": $.html()};
        let result = parse.aktionaere(data);
        assert.strictEqual(Array.isArray(result), true);
        assert.strictEqual(result[0] instanceof Object, true);
        assert.strictEqual(result[0].rank, 1);
        assert.strictEqual(result[0].name, "Egel");
        assert.strictEqual(result[0].anzahl, 1190513);
        assert.strictEqual(result[0].aenderung, 0);
    });

    it("should parse Kontoauszug of Page", () => {
        let $ = cheerio.load(fs.readFileSync(path.join(__dirname, "./data/kontoauszug.html")));
        let data = {"data": $.html()};
        let result = parse.kontoauszug(data);
        assert.strictEqual(Array.isArray(result), true);
        assert.strictEqual(result[0] instanceof Object, true);
        assert.strictEqual(result[0].id, 20904150);
        assert.strictEqual(result[0].datum - result[0].datum, 0);
        assert.strictEqual(result[0].konto, "Aktien");
        assert.strictEqual(result[0].betrag, -49815);
        assert.strictEqual(result[0].vermerk, "Kauf 135 Stk. #172055 (ATLAS) zu 369,00€");
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
        assert.strictEqual(result instanceof Object, true);
        assert.strictEqual(result.wkn, 140037);
        assert.strictEqual(result.name, "Smith AG");
        assert.strictEqual(result.gruendung - result.gruendung, 0);
        assert.strictEqual(result.aktienzahl, 3943847);
        assert.strictEqual(result.in_liquidation, false);
        assert.strictEqual(result.schutz, false);
        assert.strictEqual(result.bw_aktie, 2167.43);
        assert.strictEqual(result.kurs, 1494.01);
        assert.strictEqual(result.brief, 1494.01);
        assert.strictEqual(result.geld, 1454.26);
        assert.strictEqual(result.brief_stueckzahl, 39829);
        assert.strictEqual(result.geld_stueckzahl, 1960);
        assert.strictEqual(result.sw_aktie, 914.73);
        assert.strictEqual(result.bbw_aktie, 1582.56);
        assert.strictEqual(result.fp_aktie, 1164.06);
        assert.strictEqual(result.kgv, 138.54);
        assert.strictEqual(result.tagesvolumen, 0);
        assert.strictEqual(result.depotwert, 8251187763.48);
        assert.strictEqual(result.bargeld, 311174373.64);
        assert.strictEqual(result.highscore, 102);
        assert.strictEqual(result.highscore_groesse, 30);
        assert.strictEqual(result.highscore_wachstum, 456);
        assert.strictEqual(result.highscore_newcomer, 0);
        assert.strictEqual(result.agsx_punkte, 996);
        assert.strictEqual(result.in_agsx, false);
        assert.strictEqual(result.handelsaktivitaet, 41);
        assert.strictEqual(result.ceo instanceof Object, true);
        assert.strictEqual(result.ceo.name, "James-Smith");
        assert.strictEqual(result.ceo.index, 792);
        assert.strictEqual(result.ceo.reg_datum - result.ceo.reg_datum, 0);
        assert.strictEqual(result.ceo.isGesperrt, false);
        assert.strictEqual(result.ceo.isUserproject, false);
        assert.strictEqual(result.ceo.premium, 2);
        assert.strictEqual(Array.isArray(result.aktien), true);
        assert.strictEqual(result.aktien[0] instanceof Object, true);
        assert.strictEqual(result.aktien[0].wkn, 173636);
        assert.strictEqual(result.aktien[0].stueckzahl, 27);
        assert.strictEqual(result.aktien[0].kurs, 1174.15);
        assert.strictEqual(Array.isArray(result.anleihen), true);
        assert.strictEqual(result.anleihen[0] instanceof Object, true);
        assert.strictEqual(result.anleihen[0].betrag, 100000000);
        assert.strictEqual(result.anleihen[0].zins, 0.2);
        assert.strictEqual(result.anleihen[0].auszahlung_datum - result.anleihen[0].auszahlung_datum, 0);
        assert.strictEqual(result.anleihen[0].laufzeit, 5);
        assert.strictEqual(Array.isArray(result.kredite), true);
        assert.strictEqual(Array.isArray(result.zertifikate), true);
        assert.strictEqual(Array.isArray(result.orders), true);
        assert.strictEqual(result.orders[0] instanceof Object, true);
        assert.strictEqual(result.orders[0].typ, "sell");
        assert.strictEqual(result.orders[0].limit, 1494.01);
        assert.strictEqual(result.orders[0].stueckzahl, 7532);
        assert.strictEqual(result.orders[0].isOrderregel, true);
        assert.strictEqual(result.orders[0].isSystembankorder, false);
        assert.strictEqual(result.orders[0].datum - result.orders[0].datum, 0);
        assert.strictEqual(result.dividende, 0);
        assert.strictEqual(result.max_zertis, 1);
        assert.strictEqual(result.tages_hoch, 1531.93);
        assert.strictEqual(result.tages_tief, 1479.11);
        assert.strictEqual(result.kurs_14d, 12.25);
        assert.strictEqual(result.kurs_30d, 7.13);
        assert.strictEqual(result.kurs_60d, 1.79);
        assert.strictEqual(result.kurs_90d, 7.51);
        assert.strictEqual(result.bw_14d, -0.43);
        assert.strictEqual(result.bw_30d, 1.95);
        assert.strictEqual(result.bw_60d, -2.96);
        assert.strictEqual(result.bw_90d, 7.32);
        assert.strictEqual(result.fp_14d, 2.72);
        assert.strictEqual(result.fp_30d, 0.93);
        assert.strictEqual(result.fp_60d, 12.78);
        assert.strictEqual(result.fp_90d, 11.51);
        assert.strictEqual(result.index instanceof Object, true);
        assert.strictEqual(result.index.id, 792);
        assert.strictEqual(result.index.name, "Extrem Liberaler Index");
        assert.strictEqual(result.index.highscore, 2);
        assert.strictEqual(result.index.punkte, 581);
        assert.strictEqual(result.index.gruendung - result.index.gruendung, 0);
    });
});
