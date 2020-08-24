/** Class representing a CEO */
class Ceo {
    /** Create CEO 
     * @param {string} name - Name of CEO
     * @param {number} index - Name des Indizes
     * @param {Date} reg_datum - Datum der Anmeldung des CEO
     * @param {boolean} isGesperrt - True/False ob CEO gesperrt
     * @param {boolean} isUserproject - True/False ob CEO eines Userprojektes
     * @param  {number} premium=null - Premium-Status des CEO (0=Kein, 1=Silber, 2=Gold)
    */
    constructor(name=null, index=null, reg_datum=null, isGesperrt=null, isUserproject=null, premium=null) {
        this.name = name;
        this.index = index;
        this.reg_datum = reg_datum;
        this.isGesperrt = isGesperrt;
        this.isUserproject = isUserproject;
        this.premium = premium;
    }

    /**
     * @public
     * @property {string} name - Name des CEO.
     */
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    /**
     * @public
     * @property {number} index - Index des CEO.
     */
    get index() {
        return this._index;
    }

    set index(index) {
        this._index = index;
    }

    /**
     * @public
     * @property {Date} reg_datum - Datum der Registrierung.
     */
    get reg_datum() {
        return this._reg_datum;
    }

    set reg_datum(reg_datum) {
        this._reg_datum = reg_datum;
    }

    /**
     * @public
     * @property {boolean} isGesperrt - Ob CEO gesperrt ist.
     */
    get isGesperrt() {
        return this._isGesperrt;
    }

    set isGesperrt(isGesperrt) {
        this._isGesperrt = isGesperrt;
    }

    /**
     * @public
     * @property {boolean} isUserproject - Ob CEO Userproject ist.
     */
    get isUserproject() {
        return this._isUserproject;
    }

    set isUserproject(isUserproject) {
        this._isUserproject = isUserproject;
    }
    
    set premium(premium) {
        this._premium = premium;
    }

    /**
     * @public
     * @property  {number} premium - Premium-Status.
     */
    get premium() {
        return this._premium;
    }

}

module.exports = Ceo;