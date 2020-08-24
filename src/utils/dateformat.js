function date_short(date) {
    return new Date(date.substring(3,5) + '/' + date.substring(0,2) + '/' + date.substring(6,10));
}

function date_long(date) {
    return new Date(date.substring(3,5) + '/' + date.substring(0,2) + '/' + date.substring(6,10) + ' ' + date.substring(11));
}

module.exports = {
    date_short,
    date_long,
};