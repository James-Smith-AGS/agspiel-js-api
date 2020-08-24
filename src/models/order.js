
    class Order {
    /**
     * @param  {string} typ=null - Ordertyp (Buy/Sell)
     * @param  {number} limit=null - Preislimit der Order
     * @param  {number} stueckzahl=null - Anzahl der Aktien, die die Order kaufen soll
     * @param  {boolean} isOrderregel=null - Orderregel-Order (true/false)
     * @param  {boolean} isSystembankorder=null - Systembank-Order (true/false)
     * @param  {Date} datum=null - Datum der Ordererstellung
     */
    constructor(typ=null, limit=null, stueckzahl=null, isOrderregel=null, 
        isSystembankorder=null, datum=null) {
            this.typ = typ;
            this.limit = limit;
            this.stueckzahl = stueckzahl;
            this.isOrderregel = isOrderregel;
            this.isSystembankorder = isSystembankorder;
            this.datum = datum;        
    }

    set typ(typ) {
        this._typ = typ;
    }
    /**
     * @public
     * @property {string} typ - Ordertyp (Sell/Buy).
     */
    get typ() {
        return this._typ;
    }

    set limit(limit) {
        this._limit = limit;
    }
    
    /**
     * @public
     * @property {number} limit - Preislimit der Order.
     */
    get limit() {
        return this._limit;
    }
    
    set stueckzahl(stueckzahl) {
        this._stueckzahl = stueckzahl;
    }
    
    /**
     * @public
     * @property {number} stueckzahl - Anzahl der Aktien, die die Order kaufen soll
     */
    get stueckzahl() {
        return this._stueckzahl;
    }
    
    set isOrderregel(orderregel) {
        this._isOrderregel = orderregel;
    }
    
    /**
     * @public
     * @property {boolean} isOrderregel - Ob es sich um eine Orderregel-Order handelt.
     */
    get isOrderregel() {
        return this._isOrderregel;
    }
    
    set isSystembankorder(systembank) {
        this._isSystembankorder = systembank;
    }
    
    /**
     * @public
     * @property {boolean} isSystembankorder - Ob es sich um eine Systembankorder handelt.
     */
    get isSystembankorder() {
        return this._isSystembankorder;

    }
    
    set datum(datum) {
        this._datum = datum;
    }

    /**
     * @public
     * @property {Date} datum - Datum der Ordererstellung.
     */
    get datum() {
        return this._datum;
    }   
}

module.exports = Order;