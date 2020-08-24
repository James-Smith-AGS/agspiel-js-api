/** Objekt das eine Bilanz beschreibt */
class Bilanz {
    /**
     * @param  {Date} datum=null - Stichtag der Bilanzwerte
     * @param  {number} aktienanzahl=null - Anzahl der Aktien auf dem Markt
     * @param  {number} kurs=null - Kurs
     * @param  {number} aktiendepot=null - Wert des Aktiendepots
     * @param  {number} anleihendepot=null - Volumen aller Anleihen
     * @param  {number} kreditdepot=null - Kreditvolumen
     * @param  {number} zertifikatedepot=null - Volumen aller Zertifikate
     * @param  {number} gesamtdepotwert=null - Wert des gesamten Depots (Aktien + Anleihen + Zertifikate)
     * @param  {number} bargeld=null - Bargeld
     * @param  {number} kfd=null - Kurs-Fairerpreis-Differenz in Prozent
     * @param  {number} bwaktie=null - Buchwert pro Aktie
     * @param  {number} platzwachstum=null - Ranking im Wachstumshighscore
     * @param  {number} platzgroesse=null - Ranking im Groessenhighscore
     * @param  {number} platzgesamt=null - Ranking im Gesamthighscore
     * @param  {number} fpaktie=null - Fairerpreis pro Aktie
     * @param  {number} buchwert=null - Gesamter Buchwert
     */
    constructor(datum=null, aktienanzahl=null, kurs=null, aktiendepot=null, anleihendepot=null, kreditdepot=null,
        zertifikatedepot=null, gesamtdepotwert=null, bargeld=null, kfd=null, bwaktie=null, platzwachstum=null,
        platzgroesse=null, platzgesamt=null, fpaktie=null, buchwert=null) {
            this.datum = datum;
            this.aktienzahl = aktienanzahl;
            this.kurs = kurs;
            this.aktiendepot = aktiendepot;
            this.anleihendepot = anleihendepot;
            this.kreditdepot = kreditdepot;
            this.zertifikatedepot = zertifikatedepot;
            this.gesamtdepotwert = gesamtdepotwert;
            this.bargeld = bargeld;
            this.kfd = kfd;
            this.bwaktie = bwaktie;
            this.platzwachstum = platzwachstum;
            this.platzgroesse = platzgroesse;
            this.platzgesamt = platzgesamt;
            this.fpaktie = fpaktie;
            this.buchwert = buchwert;
    }

    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum der Bilanz.
     */
    get datum() {
        return this._datum;
    }

    set aktienzahl(aktienzahl) {
        this._aktienzahl = aktienzahl;
    }

    /**
     * @public
     * @property {number} aktienzahl - Anzahl der Aktien der AG.
     */
    get aktienzahl() {
        return this._aktienzahl;
    }

    set kurs(kurs) {
        this._kurs = kurs;
    }

    /**
     * @public
     * @property {number} kurs - Kurs der AG.
     */
    get kurs() {
        return this._kurs;
    }

    set aktiendepot(aktiendepot) {
        this._aktiendepot = aktiendepot;
    }

    /**
     * @public
     * @property {number} aktiendepot - Wert der Aktien.
     */
    get aktiendepot() {
        return this._aktiendepot;
    }

    set anleihendepot(anleihendepot) {
        this._anleihendepot = anleihendepot;
    }

    /**
     * @public
     * @property {number} anleihendepot - Wert des Anleihenvolumens.
     */
    get anleihendepot() {
        return this._anleihendepot;
    }

    set kreditdepot(kreditdepot) {
        this._kreditdepot = kreditdepot;
    }

    /**
     * @public
     * @property {number} kreditdepot - Kreditvolumen.
     */
    get kreditdepot() {
        return this._kreditdepot;
    }

    set zertifikatedepot(zertifikatedepot) {
        this._zertifikatedepot = zertifikatedepot;
    }

    /**
     * @public
     * @property {number} zertifikatedepot - Wert des Zerti-Volumens.
     */
    get zertifikatedepot() {
        return this._zertifikatedepot;
    }

    set gesamtdepotwert(gesamtdepotwert) {
        this._gesamtdepotwert = gesamtdepotwert;
    }

    /**
     * @public
     * @property {number} gesamtdepotwert - Gesamtdepotwert.
     */
    get gesamtdepotwert() {
        return this._gesamtdepotwert;
    }

    set bargeld(bargeld) {
        this._bargeld = bargeld;
    }

    /**
     * @public
     * @property {number} bargeld - Bargeld.
     */
    get bargeld() {
        return this._bargeld;
    }

    set kfd(kfd) {
        this._kfd = kfd;
    }

    /**
     * @public
     * @property {number} kfd - Kurs-FP-Differenz.
     */
    get kfd() {
        return this._kfd;
    }

    set bwaktie(bwaktie) {
        this._bwaktie = bwaktie;
    }

    /**
     * @public
     * @property {number} bwaktie - Buchwert pro Aktie.
     */
    get bwaktie() {
        return this._bwaktie;
    }

    set platzwachstum(platzwachstum) {
        this._platzwachstum = platzwachstum;
    }

    /**
     * @public
     * @property {number} platzwachstum - Platz im Wachstumshighscore.
     */
    get platzwachstum() {
        return this._platzwachstum;
    }

    set platzgroesse(platzgroesse) {
        this._platzgroesse = platzgroesse;
    }

    /**
     * @public
     * @property {number} platzgroesse - Platz im Groessenhighscore.
     */
    get platzgroesse() {
        return this._platzgroesse;
    }

    set platzgesamt(platzgesamt) {
        this._platzgesamt = platzgesamt;
    }

    /**
     * @public
     * @property {number} platzgesamt - Platz im Highscore.
     */
    get platzgesamt() {
        return this._platzgesamt;
    }

    set fpaktie(fpaktie) {
        this._fpaktie = fpaktie;
    }

    /**
     * @public
     * @property {number} fpaktie - Fairen-Preis pro Aktie.
     */
    get fpaktie() {
        return this._fpaktie;
    }

    set buchwert(buchwert) {
        this._buchwert = buchwert;
    }

    /**
     * @public
     * @property {number} buchwert - Buchwert.
     */
    get buchwert() {
        return this._buchwert;
    }
}

module.exports = Bilanz;