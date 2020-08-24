/** Objekt das ein Zertifikat beschreibt */
class Zertifikat {
    /**
     * @param  {number} betrag=null - Volumen des Zertifikates
     * @param  {string} typ=null - Typ beschrieben als "put" oder "call"
     * @param  {number} hebel=null - Hebel bzw. Multiplikator des Zertifikats
     * @param  {number} punkte=null - AGSX-Punktestand des Marktes zum Zeitpunkt der Erstellung des Zertifikates
     * @param  {Date} ablauf_datum=null - Verfalls- bzw. Auszahlungsdatum
     */
    constructor(betrag=null, typ=null, hebel=null, punkte=null, ablauf_datum=null) {
        this.betrag = betrag;
        this.typ = typ;
        this.hebel = hebel;
        this.punkte = punkte;
        this.ablauf_datum = ablauf_datum;
    }

    set betrag(betrag) {
        this._betrag = betrag;
    }

    /**
     * @public
     * @property {number} betrag - den Betrag der Anleihe.
     */
    get betrag() {
        return this._betrag;
    }

    set typ(typ) {
        this._typ = typ;
    }

    /**
     * @public
     * @property {string} typ - Typ der Anleihe (put/call).
     */
    get typ() {
        return this._typ;
    }

    set hebel(hebel) {
        this._hebel = hebel;
    }

    /**
     * @public
     * @property {number} hebel - Hebel/Multiplikator.
     */
    get hebel() {
        return this._hebel;
    }

    set punkte(punkte) {
        this._punkte = punkte;
    }

    /**
     * @public
     * @property {number} punkte - AGSX-Punkte zum Zeitpunkt der Erstellung.
     */
    get punkte() {
        return this._punkte;
    }

    set ablauf_datum(datum) {
        this._ablauf_datum = datum;
    }

    /**
     * @public
     * @property {Date} ablauf_datum - Auszahlungs- oder Verfallsdatum.
     */
    get ablauf_datum() {
        return this._ablauf_datum;
    }
}

module.exports = Zertifikat;