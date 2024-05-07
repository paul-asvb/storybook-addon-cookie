"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCookies = exports.setCookies = exports.setCookie = void 0;
function setCookie(name, value, encoding) {
    var cookieValue;
    if (typeof value === 'string') {
        cookieValue = encoding ? encodeURIComponent(value) : value;
    }
    else {
        cookieValue = JSON.stringify(value);
        encoding && (cookieValue = encodeURIComponent(cookieValue));
    }
    document.cookie = "".concat(name, "=").concat(cookieValue, ";");
}
exports.setCookie = setCookie;
function setCookies(cookie, encoding) {
    var entries = Object.keys(cookie).map(function (name) { return [
        name,
        cookie[name],
    ]; });
    entries.forEach(function (_a) {
        var name = _a[0], value = _a[1];
        return setCookie(name, value, encoding);
    });
}
exports.setCookies = setCookies;
function clearCookies() {
    var cookie = document.cookie.split(';');
    cookie.forEach(function (cookie) {
        var equalPos = cookie.indexOf('=');
        var name = equalPos > -1 ? cookie.substring(0, equalPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}
exports.clearCookies = clearCookies;
