/** Objekt das einen Kredit beschreibt */
class Kredit {
    /**
     * @param  {number} betrag=null - Volumen des Kredites.
     * @param  {number} zins=null - Zins des Kredites.
     * @param  {Date} rueckzahlung_datum=null - Datum der Rueckzahlung.
     * @param  {number} laufzeit=null - Anzahl der Tage die der Kredit laeft.
     */
    constructor(betrag=null, zins=null, rueckzahlung_datum=null, laufzeit=null) {
        this.betrag = betrag;
        this.zins = zins;
        this.rueckzahlung_datum = rueckzahlung_datum;
        this.laufzeit = laufzeit;
    }

    set betrag(betrag) {
        this._betrag = betrag;
    }

    /**
     * @public
     * @property {number} betrag - Betrag des Kredites.
     */
    get betrag() {
        return this._betrag;
    }

    set zins(zins) {
        this._zins = zins;
    }

    /**
     * @public
     * @property {number} zins - Zins des Kredites.
     */
    get zins() {
        return this._zins;
    }

    set rueckzahlung_datum(datum) {
        this._rueckzahlung_datum = datum;
    }

    /**
     * @public
     * @property {Date} rueckzahlung_datum - Rueckzahlungsdatum.
     */
    get rueckzahlung_datum() {
        return this._rueckzahlung_datum;
    }

    set laufzeit(laufzeit) {
        this._laufzeit = laufzeit;
    }

    /**
     * @public
     * @property {number} laufzeit - Laufzeit des Kredites in Tagen.
     */
    get laufzeit() {
        return this._laufzeit;
    }
}

module.exports = Kredit;