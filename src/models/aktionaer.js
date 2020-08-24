/** Objekt das einen einzelnen Aktionaer in der Aktionaersstruktur beschreibt */
class Aktionaer {
    /**
     * @param  {number} rank=null - Rang des Aktionaers in der Liste
     * @param  {number} wkn=null - WKN des Aktionaers
     * @param  {string} name=null - Name des Aktionaers
     * @param  {number} anzahl=null - Anzahl der Aktien, die der Aktionaer haelt
     * @param  {number} aenderung=null - Relative Aenderung der Anzahl zum Vortag
     */
    constructor(rank=null, wkn=null, name=null, anzahl=null, aenderung=null) {
        this.rank = rank;
        this.wkn = wkn;
        this.name = name;
        this.anzahl = anzahl;
        this.aenderung = aenderung;
    }

    set rank(rank) {
        this._rank = rank;
    }

    /**
     * @public
     * @property {number} rank - Rang in der Aktionaersstruktur.
     */
    get rank() {
        return this._rank;
    }

    set wkn(wkn) {
        this._wkn = wkn;
    }

    /**
     * @public
     * @property {number} wkn - WKN des Aktionaers.
     */
    get wkn() {
        return this._wkn;
    }

    set name(name) {
        this._name = name;
    }

    /**
     * @public
     * @property {string} name - Name des Aktionaers.
     */
    get name() {
        return this._name;
    }

    set anzahl(anzahl) {
        this._anzahl = anzahl;
    }

    /**
     * @public
     * @property {number} anzahl - Anzahl der Aktien, die der Aktionaer haelt.
     */
    get anzahl() {
        return this._anzahl;
    }

    set aenderung(aenderung) {
        this._aenderung = aenderung;
    }
    /**
     * @public
     * @property {number} aenderung - Relative Aenderung der gehaltenen Aktienzahl zum Vortag.
     */
    get aenderung() {
        return this._aenderung;
    }
}

module.exports = Aktionaer;