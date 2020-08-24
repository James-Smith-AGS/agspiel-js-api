const cheerio = require("cheerio");
const {Kontoauszug} = require("../models");
const {format} = require("../utils");


function kontoauszug(source) {
    let $ = cheerio.load(source.data);
    let kontoauszug = $('#kontoauszug')[0];
    let tbody = kontoauszug.children[3];

    let array = [];

    tbody.children.filter(o => o.name === 'tr').forEach(row => {
        row.children = row.children.filter(o => o.name === 'td');

        let id = parseInt(row.children[0].children[0].data.replace('#', ''));
        let date = format.long_date(row.children[1].children[0].data.replace(' um', ''));
        let konto = row.children[2].children[0].data;
        let betrag = parseFloat(row.children[3].children[0].children[0].data.replace(/\./g,"").replace(",","."));
        let vermerk;
        if (row.children[4].children[0].data.includes("Kauf") || row.children[4].children[0].data.includes("Verkauf")) {
            vermerk = `${row.children[4].children[0].data}${row.children[4].children[0].next.children[0].data}${row.children[4].children[2].data}`;
        } else {
            vermerk = row.children[4].children[0].data;

        }
        array.push(new Kontoauszug(id, date, konto, betrag, vermerk));
    });
    return array;

}

module.exports = kontoauszug;