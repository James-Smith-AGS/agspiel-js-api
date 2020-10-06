module.exports = class AgExistError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgExistError";
    }
}