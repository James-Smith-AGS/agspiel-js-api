/** Objekt das eine Übernahme in der Chronik beschreibt */
class Uebernahme {
    /**
     * @param  {Date} datum=null - Datum der Uebernahme
     * @param  {number} uebernommener=null - WKN der uebernommenen AG
     * @param  {number} uebernahmekh=null - Anzahl der eigenen Aktien, die durch die uebernahme eingezogen wurden
     */
    constructor(datum=null, uebernommener=null, uebernahmekh=null) {
        this.datum = datum,
        this.uebernommener = uebernommener;
        this.uebernahmekh = uebernahmekh;
    }

    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum.
     */
    get datum() {
        return this._datum;
    }

    set uebernommener(uebernommener) {
        this._uebernommener = uebernommener;
    }

    /**
     * @public
     * @property {number} uebernommener - WKN des Uebernommenen.
     */
    get uebernommener()  {
        return this._uebernommener;
    }

    set uebernahmekh(uebernahmekh) {
        this._uebernahmekh = uebernahmekh;
    }

    /**
     * @public
     * @property {number} uebernahmekh - Anzahl der eigenen Aktien wieder, die eingezogen wurden
     */
    get uebernahmekh() {
        return this._uebernahmekh;
    }
}

module.exports = Uebernahme;