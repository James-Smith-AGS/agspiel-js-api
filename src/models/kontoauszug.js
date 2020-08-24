/** Objekt das einen einzelnen Eintrag aus dem Kontoauszug beschreibt */
class Kontoauszug {
    /**
     * @param  {number} id=null
     * @param  {Date} datum=null
     * @param  {string} konto=null
     * @param  {number} betrag=null
     * @param  {string} vermerk=null
     */
    constructor(id=null, datum=null, konto=null, betrag=null, vermerk=null) {
        this.id = id;
        this.datum = datum;
        this.konto = konto;
        this.betrag = betrag;
        this.vermerk = vermerk;
    }

    set id(id) {
        this._id = id;
    }

    /**
     * @public
     * @property {number} id - ID der Transaktion.
     */
    get id() {
        return this._id;
    }

    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum der Transaktion.
     */
    get datum() {
        return this._datum;
    }

    set konto(konto) {
        this._konto = konto;
    }

    /**
     * @public
     * @property {string} konto - Konto der Transaktion.
     */
    get konto() {
        return this._konto;
    }

    set betrag(betrag) {
        this._betrag = betrag;
    }

    /**
     * @public
     * @property {number} betrag - Betrag der Kontobewegung.
     */
    get betrag() {
        return this._betrag;
    }

    set vermerk(vermerk) {
        this._vermerk = vermerk;
    }

    /**
     * @public
     * @property {string} vermerk - Zusaetzliche Anmerkung zur Kontobewegung.
     */
    get vermerk() {
        return this._vermerk;
    }
}

module.exports = Kontoauszug;