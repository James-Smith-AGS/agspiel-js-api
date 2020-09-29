const cheerio = require('cheerio');
const {Bilanz} = require("../models");

function bilanzen(source) {
  let $ = cheerio.load(source.data);
  let tables = $('h2');

  let bilanzen = [];

  tables.each((i, e) => {
    let wertTable = e.next.next;

    let wertbody = wertTable.children[1];

    let parseSpalte = ((i) => {
      //                               zeile       spalte
      let datum = wertbody.children[0].children[3+i].children[0].data.split(".");
      let start_date = new Date(parseInt(datum[2]), datum[1].length == 1 ? "0"+datum[1]-1 : datum[1]-1, datum[0].length == 1 ? "0"+datum[0] : datum[0]);
      let stk = parseInt(wertbody.children[2].children[3+i].children[0].data.replace(/\./g,"").replace(",",".")); // aktienabzahl
      let kurs = parseFloat(wertbody.children[4].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // kurs
      let aktiendepot = parseFloat(wertbody.children[6].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // aktiendepot
      let anleihendepot = parseFloat(wertbody.children[7].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // anleihendepot
      let kreditdepot = parseFloat(wertbody.children[9].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // kreditdepot
      let zertifikatedepot = parseFloat(wertbody.children[10].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // zert
      let gesamtdepotwert = parseFloat(wertbody.children[11].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // gesamt
      let bargeld = parseFloat(wertbody.children[12].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // bargeld
      let kfd = parseFloat(wertbody.children[14].children[3+i].children[0].data.replace(/\./g,"").replace(",",".").replace("%","")); // kfd
      let bwaktie = parseFloat(wertbody.children[16].children[2+i].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // bw/aktie
      let platzwachstum = parseInt(wertbody.children[18].children[3+i].children[0].data.replace(/\./g,"").replace(",",".")); // wachstum
      let platzgroesse = parseInt(wertbody.children[20].children[3+i].children[0].data.replace(/\./g,"").replace(",",".")); // platz größe
      let platzgesamt = parseInt(wertbody.children[22].children[3+i].children[0].data.replace(/\./g,"").replace(",",".")); // score Gesamt
      let fpaktie = parseFloat(wertbody.children[24].children[3+i].children[0].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // fp/aktie
      let buchwert = parseFloat(wertbody.children[26].children[2+i].children[0].children[0].data.replace(/\./g,"").replace(",",".").replace("€","")); // buchwert
      return new Bilanz(start_date, stk, kurs, aktiendepot, anleihendepot, kreditdepot, zertifikatedepot, gesamtdepotwert,
        bargeld, kfd, bwaktie, platzwachstum, platzgroesse, platzgesamt, fpaktie, buchwert);
    });
    bilanzen.push(parseSpalte(2));
    bilanzen.push(parseSpalte(0));
  });

  return bilanzen;
}

module.exports = bilanzen;