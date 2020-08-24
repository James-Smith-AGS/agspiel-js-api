const cheerio = require("cheerio");
const {Chronik, Namenswechsel, Ke, Kh, Uebernahme} = require("../models");
const {format} = require("../utils");

function chronik(source) {
    const $ = cheerio.load(source.data);
    /*
    let chronik = {
        namechanges: [],
        regname: 'unknown',
        kes: [],
        khs: [],
        uebernahmen: [],
    };
    */
    const chronik = new Chronik();
    
    let t = $('#chronik');
    
    if (t.html().includes('Es gibt noch keine Chronikeinträge')) {
        return {};
    }
    
    t.children('tbody').children('tr').each((i, e) => {
        let text = '';
        e.children[3].children.forEach(a => {
            if (a.type === 'text') {
                // console.log(a.data);
                text += a.data;
            } else {
                text += a.children[0].data;
            }    
        });
        
        let date = e.children[1].children[0].data;
        if (text.includes('AG wurde unter dem Namen ')) {
            chronik.regname = text.match(/AG wurde unter dem Namen (.*) gegr/)[1];
            chronik.regdatum = format.short_date(date);
        }
        if (text.includes('Name wurde von ')) {
            let from = text.match(/Name wurde von (.*) in /)[1];
            let to = text.match(/ in (.*) ge/)[1];
            chronik.namenswechsel.push(new Namenswechsel(format.short_date(date), from, to));
        }
        if (text.includes('Kapitalherabsetzung')) {
            let stk = parseInt(text.match(/\((.*) Stk/)[1].replace(/\./g,""));
            let vol = parseFloat(text.match(/, (.*)€/)[1].replace(/\./g,"").replace(",","."));
            chronik.khs.push(new Kh(format.short_date(date), stk, vol));
        }
        if (text.includes(' übernommen und dadurch die Anzahl der Aktien seiner AG um ')) {
            let uebernommener = +text.match(/AG hat WKN (.*) übernommen und dadurch die Anzahl der Aktien seiner AG um /)[1].replace('#', '');
            let uebernahmekh = +text.match(/ übernommen und dadurch die Anzahl der Aktien seiner AG um (.*) Stk. reduziert./)[1];
            chronik.uebernahmen.push(new Uebernahme(format.short_date(date), uebernommener, uebernahmekh));
        }
        
        // Kapitalerhöhung ~~ Encoding Issues ~~
        if (text.includes('hung wurde durchgef')) {
            let stk = parseInt(text.match(/hrt \((.*) junge Aktien /)[1].replace(/\./g,""));
        
            let volumen = null;
            if (!text.includes(' wurden angeboten, wie viele davon verkauft wurden, ist nicht dokumentiert')) {
                volumen = parseFloat(text.match(/ junge Aktien verkauft im Gesamtwert von (.*)€/)[1].replace(/\./g,"").replace(",","."));
            }
        
            chronik.kes.push(new Ke(format.short_date(date), stk, volumen));
        }
        
        if (text.includes('AG wurde durch WKN #') && text.includes(' übernommen.')) {
            let uebernehmer = text.match(/AG wurde durch WKN #(.*) übernommen\./)[1];
            chronik.uebernehmer = parseInt(uebernehmer);
            chronik.uebernahmedatum = format.short_date(date);
        }
        
        if (text.includes('AG wurde liquidiert.')) chronik.liquidationsdatum = format.short_date(date);
    });
    
    return chronik;

}

module.exports = chronik;