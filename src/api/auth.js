const axios = require("axios").default;
const customErrors = require("../Errors");

/** 
 * Objekt zur Authentifizierung im AG-Spiel 
 */
module.exports = class Auth {
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
                throw new customErrors.LoginError("Du musst dich einloggen! Kein valider Cookie hinterlegt.");
            } else if (typeof response.data == "string" && response.data.includes("Diese WKN ist nicht (mehr) g")) {
                throw new customErrors.AgExistError("Die AG dieser WKN existiert nicht!");
            } else {
                return response;
            }
        });
    }

    get client() {
        return this._client;
    }
}
