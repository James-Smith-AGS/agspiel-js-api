/** Objekt welches die Chronik einer AG beschreibt  */
class Chronik {
    /**
     * @param  {Array} namenswechsel=[] - Array/Liste mit Namenswechsel-Objekten
     * @param  {Array} kes=[] - Array/Liste mit KE-Objekten
     * @param  {Array} khs=[] - Array/Liste mit KH-Objekten
     * @param  {Array} uebernahmen=[] - Array/Liste mit Uebernahme-Objekten
     * @param  {String} regname=null - AG-Name bei der Registrierung
     * @param  {Date} regdatum=null - Datum der Registrierung
     * @param  {number} [uebernehmer=null] - WKN der AG, welche die vorliegende AG uebernommen hat
     * @param  {Date} [uebernahmedatum=null] - Datum an dem die vorliegende AG uebernommen wurde
     * @param  {Date} [liquidationsdatum=null] - Datum der Liquidation
     */
    constructor(namenswechsel=[], kes=[], khs=[], uebernahmen=[], regname=null, regdatum=null, uebernehmer=null, uebernahmedatum=null, liquidationsdatum=null) {
        this.namenswechsel = namenswechsel;
        this.kes = kes;
        this.khs = khs;
        this.uebernahmen = uebernahmen;
        this.regname = regname;
        this.regdatum = regdatum;
        this.uebernehmer = uebernehmer;
        this.uebernahmedatum = uebernahmedatum;
        this.liquidationsdatum = liquidationsdatum;
    }

    set namenswechsel(change) {
        this._namenswechsel = change;
    }

    /**
     * @public
     * @property {Array} namenswechsel - Array/Liste mit Namenswechsel-Objekten.
     */
    get namenswechsel() {
        return this._namenswechsel;
    }

    set kes(kes) {
        this._kes = kes;
    }

    /**
     * @public
     * @property {Array} kes - Array/Liste mit KE-Objekten.
     */
    get kes() {
        return this._kes;
    }

    set khs(khs) {
        this._khs = khs;
    }

    /**
     * @public
     * @property {Array} khs - Array/Liste mit KH-Objekten.
     */
    get khs() {
        return this._khs;
    }

    set uebernahmen(uebernahmen) {
        this._uebernahmen = uebernahmen;
    }

    /**
     * @public
     * @property {Array} uebernahmen - Array/Liste mit Uebernahme-Objekten.
     */
    get uebernahmen() {
        return this._uebernahmen;
    }

    set regname(regname) {
        this._regname = regname;
    }
    /**
     * @public
     * @property {string} regname - AG-Name bei der Registrierung.
     */
    get regname() {
        return this._regname;
    }

    set regdatum(regdatum) {
        this._regdatum = regdatum;
    }

    /**
     * @public
     * @property {Date} regdatum - Datum der AG Registrierung.
     */
    get regdatum() {
        return this._regdatum;
    }

    set uebernehmer(uebernehmer) {
        this._uebernehmer = uebernehmer;
    }

    /**
     * @public
     * @property  {number} uebernehmer - WKN der AG, welche die vorliegende uebernommen hat.
     */
    get uebernehmer() {
        return this._uebernehmer;
    }

    set uebernahmedatum(uebernahmedatum) {
        this._uebernahmedatum = uebernahmedatum;
    }

    /**
     * @public
     * @property {Date} uebernahmedatum - Datum an dem die vorliegende AG uebernommen wurde.
     */
    get uebernahmedatum() {
        return this._uebernahmedatum;
    }

    set liquidationsdatum(liquidationsdatum) {
        this._liquidationsdatum = liquidationsdatum;
    }

    /**
     * @public
     * @property {Date} liquidationsdatum - Datum der Liquidation.
     */
    get liquidationsdatum() {
        return this._liquidationsdatum;
    }
}

module.exports = Chronik;