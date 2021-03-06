/** Objekt das eine AG beschreibt mit deren CEO, Aktien, Anleihen, Krediten und Zertifikaten*/
class Ag {
    /**
     * @param  {number} wkn=null - WKN der AG
     * @param  {string} name=null - AG-Name
     * @param  {Date} gruendung=null - Gruendungsdatum der AG
     * @param  {number} aktienzahl=null - Anzahl der Aktien der AG
     * @param  {boolean} in_liquidation=null - Liquidationsstatus (true/false)
     * @param  {boolean} schutz=null - Übernahmeschutz durch System (true/false)
     * @param  {number} bw_aktie=null - Aktueller Buchwert pro Aktie
     * @param  {number} kurs=null - Aktueller Kurs/Boersenwert
     * @param  {number} brief=null - Aktueller Briefkurs
     * @param  {number} geld=null - Aktueller Geldkurs
     * @param  {number} brief_stueckzahl=null - Anzahl der Aktien zum aktuellen Briefkurs
     * @param  {number} geld_stueckzahl=null - Anzahl der Aktien zum aktuellen Geldkurs
     * @param  {number} sw_aktie=null - Substanzwert pro Aktie
     * @param  {number} bbw_aktie=null - Bereinigter Buchwert pro Aktie
     * @param  {number} fp_aktie=null - Fairer Preis je Aktie
     * @param  {number} kgv=null - Kurs-Gewinn-Verhältnis
     * @param  {number} tagesvolumen=null - Gehandeltes Tagesvolumen am Markt mit dieser AG
     * @param  {number} depotwert=null - Depotwert der AG (Aktien + Anleihen)
     * @param  {number} bargeld=null - Bargeld
     * @param  {number} highscore=null - Platz im Gesamthighscore
     * @param  {number} highscore_groesse=null - Platz im Groessenhighscore
     * @param  {number} highscore_wachstum=null - Platz im Wachstumshighscore
     * @param  {number} highscore_newcomer=null - Platz im Newcomerhighscore
     * @param  {number} agsx_punkte=null - AGSX-Punkte (die taeglichen auf dem AG-Profil)
     * @param  {boolean} in_agsx=null - Mitglied im AGSX (true/false)
     * @param  {number} handelsaktivitaet=null - Handelsaktivitaet in Prozent
     * @param  {Ceo} ceo=null - Ein Object mit Daten ueber den CEO der AG
     * @param  {Array} aktien=[] - Liste/Array mit Objekten fuer jede Aktie im Depot der AG
     * @param  {Array} anleihen=[] - Liste/Array mit Objekten fuer jede Anleihe im Depot der AG
     * @param  {Array} kredite=[] - Liste/Array mit Objekten fuer jeden Kredit der AG
     * @param  {Array} zertifikate=[] - Liste/Array mit Objekten fuer jedes gezeichnetes Zertifikat der AG
     * @param  {Array} orders=[]  - Liste/Array mit Objekten fuer jede Order im Orderbuch der AG
     * @param  {number} dividende=null - Dividende in Prozent
     * @param  {number} max_zertis=null - Maximales Zertifikatevolumen in Prozent
     * @param  {number} tages_hoch=null - Tageshoch des Kurses
     * @param  {number} tages_tief=null - Tagestief des Kurses
     * @param  {number} kurs_14d=null - Relative Veraenderung zum Kurs von vor 14 Tagen
     * @param  {number} kurs_30d=null - Relative Veraenderung zum Kurs von vor 30 Tagen
     * @param  {number} kurs_60d=null - Relative Veraenderung zum Kurs von vor 60 Tagen
     * @param  {number} kurs_90d=null - Relative Veraenderung zum Kurs von vor 90 Tagen
     * @param  {number} bw_14d=null - Relative Veraenderung zum Buchwert von vor 14 Tagen
     * @param  {number} bw_30d=null - Relative Veraenderung zum Buchwert von vor 30 Tagen
     * @param  {number} bw_60d=null - Relative Veraenderung zum Buchwert von vor 60 Tagen
     * @param  {number} bw_90d=null - Relative Veraenderung zum Buchwert von vor 90 Tagen
     * @param  {number} fp_14d=null - Relative Veraenderung zum Fairen Preis von vor 14 Tagen
     * @param  {number} fp_30d=null - Relative Veraenderung zum Fairen Preis von vor 30 Tagen
     * @param  {number} fp_60d=null - Relative Veraenderung zum Fairen Preis von vor 60 Tagen
     * @param  {number} fp_90d=null - Relative Veraenderung zum Fairen Preis von vor 90 Tagen
     * @param  {Index} index=null - Object mit Daten ueber den Index der AG
     */
    constructor(wkn=null, name=null, gruendung=null, aktienzahl=null, in_liquidation=null, schutz=null, bw_aktie=null, kurs=null, brief=null, 
        geld=null, brief_stueckzahl=null, geld_stueckzahl=null, sw_aktie=null, bbw_aktie=null, fp_aktie=null,
        kgv=null, tagesvolumen=null, depotwert=null, bargeld=null, highscore=null, highscore_groesse=null,
        highscore_wachstum=null, highscore_newcomer=null, agsx_punkte=null, in_agsx=null, handelsaktivitaet=null,
        ceo=null, aktien=[], anleihen=[], kredite=[], zertifikate=[], orders=[], dividende=null, max_zertis=null,
        tages_hoch=null, tages_tief=null, kurs_14d=null, kurs_30d=null, kurs_60d=null, kurs_90d=null, bw_14d=null, bw_30d=null,
        bw_60d=null, bw_90d=null, fp_14d=null, fp_30d=null, fp_60d=null, fp_90d=null, index=null) {
            this.wkn = wkn;
            this.name = name;
            this.gruendung = gruendung;
            this.aktienzahl = aktienzahl;
            this.in_liquidation = in_liquidation;
            this.schutz = schutz;
            this.bw_aktie = bw_aktie;
            this.kurs = kurs;
            this.brief = brief;
            this.geld = geld;
            this.brief_stueckzahl = brief_stueckzahl;
            this.geld_stueckzahl = geld_stueckzahl;
            this.sw_aktie = sw_aktie;
            this.bbw_aktie = bbw_aktie;
            this.fp_aktie = fp_aktie;
            this.kgv = kgv;
            this.tagesvolumen = tagesvolumen;
            this.depotwert = depotwert;
            this.bargeld = bargeld;
            this.highscore = highscore;
            this.highscore_groesse = highscore_groesse;
            this.highscore_wachstum = highscore_wachstum;
            this.highscore_newcomer = highscore_newcomer;
            this.agsx_punkte = agsx_punkte;
            this.in_agsx = in_agsx;
            this.handelsaktivitaet = handelsaktivitaet;
            this.ceo = ceo;
            this.aktien = aktien;
            this.anleihen = anleihen;
            this.kredite = kredite;
            this.zertifikate = zertifikate;
            this.orders = orders;
            this.dividende = dividende;
            this.max_zertis = max_zertis;
            this.tages_hoch = tages_hoch;
            this.tages_tief = tages_tief;
            this.kurs_14d = kurs_14d;
            this.kurs_30d = kurs_30d;
            this.kurs_60d = kurs_60d;
            this.kurs_90d = kurs_90d;
            this.bw_14d = bw_14d;
            this.bw_30d = bw_30d;
            this.bw_60d = bw_60d;
            this.bw_90d = bw_90d;
            this.fp_14d = fp_14d;
            this.fp_30d = fp_30d;
            this.fp_60d = fp_60d;
            this.fp_90d = fp_90d;
            this.index = index;
    }

    set wkn(wkn) {
        this._wkn = wkn;
    }

    /**
     * @public
     * @property {number} wkn -  Wkn der AG.
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

    set gruendung(gruendung) {
        this._gruendung = gruendung;
    }

    /**
     * @public
     * @property {Date} gruendung -  Gruendungsdatum als Date-Objekt.
     */
    get gruendung() {
        return this._gruendung;
    }

    set aktienzahl(aktienzahl) {
        this._aktienzahl = aktienzahl;
    }

    /**
     * @public
     * @property {number} aktienzahl -  Anzahl der Aktien der AG.
     */
    get aktienzahl() {
        return this._aktienzahl;
    }

    set in_liquidation(in_liquidation) {
        this._in_liquidation = in_liquidation;
    }

    /**
     * @public
     * @property {boolean} in_liquidation - Zeigt ob sich die AG aktuell in Liquidation befindet.
     */
    get in_liquidation() {
        return this._in_liquidation;
    }

    set schutz(schutz) {
        this._schutz = schutz;
    }

    /**
     * @public
     * @property {boolean} schutz - Zeigt ob die AG durch das System vor Uebernahmen geschützt ist
     */
    get schutz() {
        return this._schutz;
    }

    set bw_aktie(bw_aktie) {
        this._bw_aktie = bw_aktie;
    }

    /**
     * @public
     * @property  {number} bw_aktie - Zeigt aktuellen Buchwert pro Aktie
     */
    get bw_aktie() {
        return this._bw_aktie;
    }

    set kurs(kurs) {
        this._kurs = kurs;
    }

    /**
     * @public
     * @property {number} kurs -  Aktueller Kurs der AG. 
     */
    get kurs() {
        return this._kurs;
    }

    set brief(brief) {
        this._brief = brief;
    }

    /**
     * @public
     * @property {number} brief -  Aktueller Briefkurs der AG.
     */
    get brief() {
        return this._brief;
    }

    set geld(geld) {
        this._geld = geld;
    }

    /**
     * @public
     * @property {number} geld-  Aktueller Geldkurs der AG. 
     */
    get geld() {
        return this._geld;
    }

    set brief_stueckzahl(brief_stueckzahl) {
        this._brief_stueckzahl = brief_stueckzahl;
    }

    /**
     * @public
     * @property {number} brief_stueckzahl -  Anzahl der Aktien zum Briefkurs.
     */
    get brief_stueckzahl() {
        return this._brief_stueckzahl;
    }

    set geld_stueckzahl(geld_stueckzahl) {
        this._geld_stueckzahl = geld_stueckzahl;
    }

    /**
     * @public
     * @property {number} geld_stueckzahl -  Anzahl der Aktien zum Geldkurs.
     */
    get geld_stueckzahl() {
        return this._geld_stueckzahl;
    }

    set fp_aktie(fp) {
        this._fp_aktie = fp;
    }

    /**
     * @public
     * @property {number} fp_aktie -  Fairer-Preis der AG  (Premium-Info).
     */
    get fp_aktie() {
        return this._fp_aktie;
    }

    set sw_aktie(sw) {
        this._sw_aktie = sw;
    }

    /**
     * @public
     * @property {number} sw_aktie -  Substanz-Wert der AG  (Premium-Info).
     */
    get sw_aktie() {
        return this._sw_aktie;
    }

    set bbw_aktie(bbw) {
        this._bbw_aktie = bbw;
    }

    /**
     * @public
     * @property {number} bbw_aktie -  Bereinigter Buchwert der AG  (Premium-Info).
     */
    get bbw_aktie() {
        return this._bbw_aktie;
    }

    set kgv(kgv) {
        this._kgv = kgv;
    }

    /**
     * @public
     * @property {number} kgv -  Kurs-Gewinn-Verhältnis.
     */
    get kgv() {
        return this._kgv;
    }

    set tagesvolumen(tagesvol) {
        this._tagesvolumen = tagesvol;
    }

    /**
     * @public
     * @property {number} tagesvolumen -  Tagesvolumen.
     */
    get tagesvolumen() {
        return this._tagesvolumen;
    }

    set depotwert(depotwert) {
        this._depotwert = depotwert;
    }

    /**
     * @public
     * @property {number} depotwert -  Depotwert.
     */
    get depotwert() {
        return this._depotwert;
    }

    set bargeld(cash) {
        this._bargeld = cash;
    }

    /**
     * @public
     * @property {number} bargeld -  Bargeldbestand der AG.
     */
    get bargeld() {
        return this._bargeld;
    }

    set highscore(highscore) {
        this._highscore = highscore;
    }

    /**
     * @public
     * @property {number} highscore - Zeigt den Platz im Gesamt-Highscore.
     */
    get highscore() {
        return this._highscore;
    }

    set highscore_groesse(highscore_groesse) {
        this._highscore_groesse = highscore_groesse;
    }

    /**
     * @public
     * @property {number} highscore_groesse - Zeigt den Platz im Groessen-Highscore.
     */
    get highscore_groesse() {
        return this._highscore_groesse;
    }

    set highscore_wachstum(highscore_wachstum) {
        this._highscore_wachstum = highscore_wachstum;
    }

    /**
     * @public
     * @property {number} highscore_wachstum- Zeigt den Platz im Wachstum-Highscore.
     */
    get highscore_wachstum() {
        return this._highscore_wachstum;
    }

    set highscore_newcomer(highscore_newcomer) {
        this._highscore_newcomer = highscore_newcomer;
    }

    /**
     * @public
     * @property {number} highscore_newcomer - Zeigt den Platz im Newcomer-Highscore.
     */
    get highscore_newcomer() {
        return this._highscore_newcomer;
    }

    set agsx_punkte(agsx) {
        this._agsx_punkte = agsx;
    }

    /**
     * @public
     * @property {number} agsx_punkte -  Täglichen AGSX-Punkte der AG.
     */
    get agsx_punkte() {
        return this._agsx_punkte;
    }

    set in_agsx(in_agsx) {
        this._in_agsx = in_agsx;
    }

    /**
     * @public
     * @property {boolean} in_agsx - Zeigt ob die AG Mitglied im AGSX ist.
     */
    get in_agsx() {
        return this._in_agsx;
    }

    set handelsaktivitaet(handelsaktivitaet) {
        this._handelsaktivitaet = handelsaktivitaet;
    }

    /**
     * @public
     * @property {number} handelsaktivitaet -  Handelsaktivitaet in Prozent.
     */
    get handelsaktivitaet() {
        return this._handelsaktivitaet;
    }

    set ceo(ceo) {
        this._ceo = ceo;
    }

    /**
     * @public
     * @property {Ceo} ceo -  Object des Typs Ceo.
     */
    get ceo() {
        return this._ceo;
    }

    set aktien(aktien) {
        this._aktien = aktien;
    }

    /**
     * @public
     * @property {Array} aktien -  Array mit allen Aktien im Depot der AG.
     */
    get aktien() {
        return this._aktien;
    }

    set anleihen(anleihen) {
        this._anleihen = anleihen;
    }

    /**
     * @public
     * @property {Array} anleihen -  Arry mit allen Anleihen der AG.
     */
    get anleihen() {
        return this._anleihen;
    }

    set kredite(kredite) {
        this._kredite = kredite;
    }

    /**
     * @public
     * @property {Array} kredite -  Array mit allen Krediten der AG.
     */
    get kredite() {
        return this._kredite;
    }

    set zertifikate(zertis) {
        this._zertifikate = zertis;
    }

    /**
     * @public
     * @property {Array} zertifikate -  Array mit allen Zertifikaten der AG.
     */
    get zertifikate() {
        return this._zertifikate;
    }

    set orders(orders) {
        this._orders = orders;
    }

    /**
     * @public
     * @property {Array} orders -  Array mit allen Orders im Orderbuch der AG.
     */
    get orders() {
        return this._orders;
    }

    set dividende(dividende) {
        this._dividende = dividende;
    }

    /**
     * @public
     * @property {number} dividende -  Dividende in Prozent.
     */
    get dividende() {
        return this._dividende;
    }

    set max_zertis(max_zertis) {
        this._max_zertis = max_zertis;
    }

    /**
     * @public
     * @property {number} max_zertis -  Maximal mögliches relatives Zertifikatevolumen.
     */
    get max_zertis() {
        return this._max_zertis;
    }

    set tages_hoch(hoch) {
        this._tages_hoch = hoch;
    }

    /**
     * @public
     * @property {number} tages_hoch -  Kurshoch des aktuellen Tages.
     */
    get tages_hoch() {
        return this._tages_hoch;
    }

    set tages_tief(tief) {
        this._tages_tief = tief;
    }

    /**
     * @public
     * @property {number} tages_tief -  Kurstief des aktuellen Tages.
     */
    get tages_tief() {
        return this._tages_tief;
    }

    set kurs_14d(kurs_14d) {
        this._kurs_14d = kurs_14d;
    }

    /**
     * @public
     * @property {number} kurs_14d -  Relative Änderung Kurs14d.
     */
    get kurs_14d() {
        return this._kurs_14d;
    }

    set kurs_30d(kurs_30d) {
        this._kurs_30d = kurs_30d;
    }

    /**
     * @public
     * @property {number} kurs_30d -  Relative Änderung Kurs30d.
     */
    get kurs_30d() {
        return this._kurs_30d;
    }

    set kurs_60d(kurs_60d) {
        this._kurs_60d = kurs_60d;
    }

    /**
     * @public
     * @property {number} kurs_60d -  Relative Änderung Kurs60d.
     */
    get kurs_60d() {
        return this._kurs_60d;
    }

    set kurs_90d(kurs_90d) {
        this._kurs_90d = kurs_90d;
    }

    /**
     * @public
     * @property {number} kurs_90d -  Relative Änderung Kurs90d.
     */
    get kurs_90d() {
        return this._kurs_90d;
    }

    set bw_14d(bw_14d) {
        this._bw_14d = bw_14d;
    }

    /**
     * @public
     * @property {number} bw_14d -  Relative Änderung BW14d.
     */
    get bw_14d() {
        return this._bw_14d;
    }

    set bw_30d(bw_30d) {
        this._bw_30d = bw_30d;
    }

    /**
     * @public
     * @property {number} bw_30d -  Relative Änderung BW30d.
     */
    get bw_30d() {
        return this._bw_30d;
    }

    set bw_60d(bw_60d) {
        this._bw_60d = bw_60d;
    }

    /**
     * @public
     * @property {number} bw_60d -  Relative Änderung BW60d.
     */
    get bw_60d() {
        return this._bw_60d;
    }

    set bw_90d(bw_90d) {
        this._bw_90d = bw_90d;
    }

    /**
     * @public
     * @property {number} bw_90d -  Relative Änderung BW90d.
     */
    get bw_90d() {
        return this._bw_90d;
    }

    set fp_14d(fp_14d) {
        this._fp_14d = fp_14d;
    }

    /**
     * @public
     * @property {number} fp_14d -  Relative Änderung FP14d.
     */
    get fp_14d() {
        return this._fp_14d;
    }

    set fp_30d(fp_30d) {
        this._fp_30d = fp_30d;
    }

    /**
     * @public
     * @property {number} fp_30d -  Relative Änderung FP30d.
     */
    get fp_30d() {
        return this._fp_30d;
    }

    set fp_60d(fp_60d) {
        this._fp_60d = fp_60d;
    }

    /**
     * @public
     * @property {number} fp_60d -  Relative Änderung FP60d.
     */
    get fp_60d() {
        return this._fp_60d;
    }

    set fp_90d(fp_90d) {
        this._fp_90d = fp_90d;
    }

    /**
     * @public
     * @property {number} fp_90d -  Relative Änderung FP90d.
     */
    get fp_90d() {
        return this._fp_90d;
    }

    set index(index) {
        this._index = index;
    }

    /**
     * @public
     * @property {Index} index - Index-Objekt.
     */
    get index() {
        return this._index;
    }
}

module.exports = Ag;