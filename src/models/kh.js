/** Objekt das eine KH in der Chronik beschreibt */
class Kh {
    /**
     * @param  {Date} datum=null - Datum der Kapitalherabsetzung
     * @param  {number} anzahl=null - Anzahl der eingezogenen Aktien
     * @param  {number} volumen=null - Gesamtes eingezogenes Volumen
     */
    constructor(datum=null, anzahl=null, volumen=null) {
        this.datum = datum;
        this.anzahl = anzahl;
        this.volumen = volumen;
    }

    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum der KH.
     */
    get datum() {
        return this._datum;
    }

    set anzahl(anzahl) {
        this._anzahl = anzahl;
    }

    /**
     * @public
     * @property {number} anzahl - Anzahl der eingezogenen Aktien.
     */
    get anzahl() {
        return this._anzahl;
    }

    set volumen(volumen) {
        this._volumen = volumen;
    }

    /**
     * @public
     * @property {number} volumen - Eingezogenes Volumen.
     */
    get volumen() {
        return this._volumen;
    }
}

module.exports = Kh;