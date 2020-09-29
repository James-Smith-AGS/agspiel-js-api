const axios = require("axios").default;
const parse = require("../parser");

/** 
 * Objekt zur Authentifizierung im AG-Spiel 
 */
class Auth {
    /**
     * @param  {string} agspielCookie - Einzigartiger "ag-spiel"-Cookie, der zum Log-in benötigt wird.
     */
    constructor(agspielCookie) {
        this.agsCookie = agspielCookie;
        this.client = this.agsCookie;
    }

    set agsCookie(cookie) {
        this._agsCookie = cookie;
    }
    /**
     * @public
     * @property {string} agsCookie - Einzigartiger "ag-spiel"-Cookie, der zum Log-in benötigt wird.
     */
    get agsCookie() {
        return this._agsCookie;
    }
    
    /**
     * Erstellt Axios-Client mit dem AG-Spiel-Cookie - wird für die Requests benötigt.
     * @private
     * @param {string} - AGS-Cookie
     */
    set client(cookie) {
        this._client = axios.create({
            baseURL: "https://www.ag-spiel.de/",
            headers: {
                "Cookie": `ag-spiel=${cookie};`
            }
        });
        this._client.interceptors.response.use((response) => {
            if (typeof response.data == "string" && response.data.includes("ssen sich registrieren")) {
                throw new Error("Du musst dich einloggen! Kein valider Cookie wurde hinterlegt.");
            } else {
                return response;
            }
        });
    }

    get client() {
        return this._client;
    }
}

/** Objekt zum Abfragen der Daten aus der offiziellen AG-Spiel API und den Webseiten. Wird durch das "Auth"-Objekt erweitert.
 * @extends Auth
*/
class Api extends Auth {
    /**
     * @param  {string} agspielCookie - Einzigartiger "ag-spiel"-Cookie, der zum Log-in benötigt wird.
     * @param  {number} [cacheTime=5*60*1000] - Dauer in Millisekunden für die die Daten der API im Cache zwischengespeichert werden.
     * @param  {string} [version="5"] - API-Version, die genutzt werde soll.
     */
    constructor(agspielCookie, cacheTime=5*60*1000, version="5") {
        super(agspielCookie);
        this.version = version;
        this.timestamp = null;
        this.cacheTime = cacheTime;
    }

    set version(v) {
        this._version = v;
    }

    /**
     * @property {string} version - API-Version, die genutzt werde soll.
     */
    get version() {
        return this._version;
    }

    set cacheTime(cacheTime) {
        this._cacheTime = cacheTime;
    }

    /**
     * @property {number} cacheTime - Dauer in Millisekunden für die die Daten der API im Cache zwischengespeichert werden.
     */
    get cacheTime() {
        return this._cacheTime;
    }

    /**
     * Funktion, die beim Aufruf die gewünschte Seite des AGS lädt und gleichzeitig prüft, ob die API-Daten im Cache (Cachetimer default: 5 Mins) verfügbar sind oder neu abgerufen werden müssen.
     * @private
     * @param {string} url - URL zu einer Seite des AG-Spiels 
     * @returns {Promise.<Array>} - Gibt ein Pomise-Object zurück, welches nach der Auflösung ein Array mit den Daten der Website und der API enthält.
     */
    _request(url) {
        return Promise.all([
            this.client.get(url),
            new Promise((resolve) => {
                if (!this.timestamp || (Date.now() - this.timestamp) > this.cacheTime) {
                    // console.log("Api-Daten älter als 5 Minuten und werden abgefragt");
                    this.client.get(`https://www.ag-spiel.de/api/get/data.php?version=${this.version}`).then((res) => {
                        this._data = res;
                        this.timestamp = Date.now();
                        resolve(res);
                    });
                } else {
                    // console.log("Api Daten jünger als 5 Minuten und daher noch aktuell");
                    resolve(this._data);
                }
            }),
        ]);
    }

    /**
     * Funktion, die mit dem hinterlegten Cookie eine beliebige Seite des AG-Spiels aufruft.
     * @private
     * @param {string} url - URL zu einer Seite des AG-Spiels.
     * @returns {Promise.<Object>} - Gibt ein Pomise-Object zurück, welches nach der Auflösung den Inhalt der Website enthält.
     */
    _request_page(url) {
        return this.client.get(url);
    }

    /**
     * Funktion, die beim aufrufen prüft, ob die API-Daten im definierten Zeitraum des Cache-Timers (default: 5 Minuten) schonmal abgerufen wurden sie ggf. neu lädt.
     * @private
     * @returns {Promise.<Object>} - Gibt ein Pomise-Object zurück, welches nach der Auflösung den Inhalt der API enthält.
     */
    _request_api() {
        return new Promise((resolve) => {
            if (!this.timestamp || (Date.now() - this.timestamp) > this.cacheTime) {
                // console.log("Api-Daten älter als 5 Minuten und werden abgefragt");
                this.client.get(`https://www.ag-spiel.de/api/get/data.php?version=${this.version}`).then((res) => {
                    this._data = res;
                    this.timestamp = Date.now();
                    resolve(res);
                });
            } else {
                // console.log("Api Daten jünger als 5 Minuten und daher noch aktuell");
                resolve(this._data);
            }
        });
    }

    /**
     * @param  {number} wkn
     * @returns {Promise.<Ag>} - Promise Object welches ein AG-Object wiedergibt.
     */
    ag(wkn) {
        return this._request(`index.php?section=profil&aktie=${String(wkn)}`).then(parse.profil).catch((e) => console.log(e));
    }

    /**
     * @param  {number} wkn
     * @returns {Promise.<Chronik>} - Promise Object welches ein Chronik-Object wiedergibt.
     */
    chronik(wkn) {
        return this._request_page(`index.php?section=chronik&wkn=${wkn}`).then(parse.chronik).catch((e) => console.log(e));
    }

    /**
     * @param  {number} wkn
     * @returns {Promise.<Aktionaer[]>} - Promise Object welches ein Array mit Aktionaer-Objecten wiedergibt.
     */
    aktionaere(wkn) {
        return this._request_page(`index.php?section=agstruktur&WKN=${wkn}`).then(parse.aktionaere).catch((e) => console.log(e));
    }

    /**
     * @param  {number} wkn
     * @returns {Promise.<Bilanz[]>} - Promise Object welches ein Array mit Bilanz-Objecten wiedergibt.
     */
    bilanzen(wkn) {
        return this._request_page(`index.php?section=bilanzen&wkn=${wkn}`).then(parse.bilanzen).catch((e) => console.log(e));
    }

    /**
     * @param  {number} wkn
     * @returns {Promise.<Kontoauszug[]>} - Promise Object welches ein Array mit Kontoauszug-Objecten wiedergibt.
     */
    kontoauszug(wkn) {
        return this._request_page(`index.php?section=konto&aktie=${wkn}`).then(parse.kontoauszug).catch((e) => console.log(e));
    }

    /**
     * @returns {Promise.<Index[]>} - Promise Object welches ein Array von Index-Objecten wiedergibt (sortiert nach IndexID).
     */
    indexListe() {
        return this._request_api().then(parse.indizes).catch((e) => console.log(e));
    }
    
    /**
     * @returns {Promise.<AgOfList[]>} - Promise Object welches eine Liste von allen AGs mit WKNs, Name und CEO wiedergibt (sortiert nach WKN).
     */
    agListe() {
        return this._request_api().then(parse.ags).catch((e) => console.log(e));
    }
}

module.exports = Api;