/** Objekt das eine Aktie im Depot einer AG beschreibt */
class Aktie {
    /**
     * @param  {number} wkn=null - WKN der Aktie im Depot
     * @param  {number} stueckzahl=null - Anzahl der Aktien im Depot
     */
    constructor(wkn=null, stueckzahl=null) {
        this.wkn = wkn;
        this.stueckzahl = stueckzahl;
    }

    set wkn(wkn) {
        this._wkn = wkn;
    }
    
    /**
     * @public
     * @property {number} wkn - WKN der AG im Depot.
     */
    get wkn() {
        return this._wkn;
    }
    
    set stueckzahl(stueckzahl) {
        this._stueckzahl = stueckzahl;
    }

    /**
     * @public
     * @property {number} stueckzahl - Anzahl der Aktien der AG im Depot.
     */
    get stueckzahl() {
        return this._stueckzahl;
    }
}

module.exports = Aktie;