const cheerio = require("cheerio");
const {Aktionaer} = require("../models");

function aktionaere(source) {
    let $ = cheerio.load(source.data);
    let aktionaere = [];

    let table = $('table[class=normalborder]')[0];
    let tbody = table.children[0];
    tbody.children = tbody.children.filter(row => row.type === 'tag');
    tbody.children.pop();
    tbody.children.shift();

    for (const row of tbody.children) {
        let wkn;
        let name;
        if (row.children[0].children[1] === undefined) {
            wkn = 0;
            name = 'Systembank';
        } else {
            wkn = parseInt(row.children[0].children[1].attribs.href.substring(31)); // aktionaer wkn
            name = row.children[0].children[1].children[0].data.match(/\((.*)\)/)[1]; // aktionaer name
        }
        let rank = +row.children[0].children[0].data.replace('.', '').replace('Systembank', ''); // rank
        let stk = parseInt(row.children[1].children[0].data.replace(/\./g, '')); // stk
        let aenderung = null;
        if (row.children[2].children[0].name === 'img') {
            aenderung = null;
        } else {
            aenderung = parseFloat(row.children[2].children[0].children[0].data);
        }
        aktionaere.push(new Aktionaer(rank, wkn, name, stk, aenderung)); 
    }
    return aktionaere;
}

module.exports = aktionaere;