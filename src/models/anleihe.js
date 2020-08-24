/** Objekt das eine Anleihe beschreibt */
class Anleihe {
    /**
     * @param  {number} betrag=null - Volumen der Anleihe
     * @param  {number} zins=null - Zins auf das Volumen
     * @param  {Date} auszahlung_datum=null - Datum der Auszahlung
     * @param  {number} laufzeit=null - Laufzeit der Anleihe in Tagen
     */
    constructor(betrag=null, zins=null, auszahlung_datum=null, laufzeit=null) {
        this.betrag = betrag;
        this.zins = zins;
        this.auszahlung_datum = auszahlung_datum;
        this.laufzeit = laufzeit;
    }

    set betrag(betrag) {
        this._betrag = betrag;
    }

    /**
     * @public
     * @property {number} betrag - Betrag der Anleihe.
     */
    get betrag() {
        return this._betrag;
    }

    set zins(zins) {
        this._zins = zins;
    }

    /**
     * @public
     * @property {number} zins - Zins der Anleihe.
     */
    get zins() {
        return this._zins;
    }

    set auszahlung_datum(datum) {
        this._auszahlung_datum = datum;
    }

    /**
     * @public
     * @property {Date} auszahlung_datum - Auszahlungsdatum.
     */
    get auszahlung_datum() {
        return this._auszahlung_datum;
    }

    set laufzeit(laufzeit) {
        this._laufzeit = laufzeit;
    }

    /**
     * @public
     * @property {number} laufzeit - Laufzeit in Tagen.
     */
    get laufzeit() {
        return this._laufzeit;
    }

}

module.exports = Anleihe;