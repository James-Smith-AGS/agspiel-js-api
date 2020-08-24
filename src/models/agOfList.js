
/** Objekt das eiune AG aus der Auflistung aller AGs beschreibt. */
class AgOfList {
    /**
     * @param  {number} wkn=null
     * @param  {string} name=null
     * @param  {string} ceo=null
     */
    constructor(wkn=null, name=null, ceo=null,) {
        this.wkn = wkn;
        this.name = name;
        this.ceo = ceo;
    }

    set wkn(wkn) {
        this._wkn = wkn;
    }
    
    /**
     * @public
     * @property {number} wkn -  WKN der AA.
     */
    get wkn() {
        return this._wkn;
    }

    set name(name) {
        this._name = name;
    }

    /**
     * @public
     * @property {string} name -  Name der AG.
     */
    get name() {
        return this._name;
    }

    set ceo(ceo) {
        this._ceo = ceo;
    }

    /**
     * @public
     * @property {string} ceo -  Name des CEO der AG.
     */
    get ceo() {
        return this._ceo;
    }
}

module.exports = AgOfList;