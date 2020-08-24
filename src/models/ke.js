/** Objekt das eine KE in der Chronik beschreibt */
class Ke {
    /**
     * @param  {Date} datum=null - Datum der Kapitalerhoehung
     * @param  {number} anzahl=null - Anzahl der ausgegebenen Aktien
     * @param  {number} volumen=null - Gesamtes ausgegebenes Volumen
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
     * @property {Date} datum - Datum der KE.
     */
    get datum() {
        return this._datum;
    }

    set anzahl(anzahl) {
        this._anzahl = anzahl;
    }

    
    /**
     * @public
     * @property {number} anzahl - Anzahl der ausgegebenen Aktien.
     */
    get anzahl() {
        return this._anzahl;
    }

    set volumen(volumen) {
        this._volumen = volumen;
    }

    
    /**
     * @public
     * @property {number} volumen - Ausgegebenes Volumen.
     */
    get volumen() {
        return this._volumen;
    }
}

module.exports = Ke;