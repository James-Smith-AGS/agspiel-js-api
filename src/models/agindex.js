
    /** Objekt das einen Index beschreibt */
    class Index {
    /**
     * @param  {number} id=null - Einzigartige Index-ID
     * @param  {string} name=null - Name
     * @param  {number} highscore=null - Platz im Highscore
     * @param  {number} punkte=null - Index-Punkte
     * @param  {Date} gruendung=null - Gruendungsdatum
     */
    constructor(id=null, name=null, highscore=null, punkte=null, gruendung=null) {
        this.id = id;
        this.name = name;
        this.highscore = highscore;
        this.punkte = punkte;
        this.gruendung = gruendung;
    }

    set id(id) {
        this._id = id;
    }

    /**
     * @public
     * @property {number} id -  Index-ID 
     */
    get id() {
        return this._id;
    }

    set name(name) {
        this._name = name;
    }

    /**
     * @public
     * @property {string} name -  Namen des Indizes 
     */
    get name() {
        return this._name;
    }

    set highscore(platz) {
        this._highscore = platz;
    }

    /**
     * @public
     * @property {number} highscore -  HighscorePlatz 
     */
    get highscore() {
        return this._highscore;
    }

    set punkte(punkte) {
        this._punkte = punkte;
    }

    /**
     * @public
     * @property {number} punkte -  Index-Punkte 
     */
    get punkte() {
        return this._punkte;
    }

    set gruendung(gruendung) {
        this._gruendung = gruendung;
    }

    /**
     * @public
     * @property {Date} gruendung -  Gruendungsdatum
     */
    get gruendung() {
        return this._gruendung;
    }
}

module.exports = Index;