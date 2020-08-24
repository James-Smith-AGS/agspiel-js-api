/** Objekt das einen Namenswechsel in der Chronik beschreibt */
class Namenswechsel {
    /**
     * @param  {Date} datum=null - Datum des Namenswechsels
     * @param  {string} oldName=null - Name der AG vor dem Wechsel
     * @param  {string} newName=null - Name der AG nach dem Wechsel
     */
    constructor(datum=null, oldName=null, newName=null) {
        this.datum = datum;
        this.oldName = oldName;
        this.newName = newName;
    }
    
    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum des Namenswechsels.
     */
    get datum() {
        return this._datum;
    }

    set oldName(old) {
        this._oldName = old;
    }

    
    /**
     * @public
     * @property {string} oldName - Name der AG vor dem Wechsel.
     */
    get oldName() {
        return this._oldName;
    }

    set newName(newName) {
        this._newName = newName;
    }

    
    /**
     * @public
     * @property {string} newName - Name der AG nach dem Wechsel.
     */
    get newName() {
        return this._newName;
    }
}

module.exports = Namenswechsel;