"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieDecorator = void 0;
var preview_api_1 = require("@storybook/preview-api");
var utils_1 = require("./utils");
var constants_1 = require("./constants");
var cookieDecorator = function (storyFn, _a) {
    var parameters = _a.parameters;
    var _b = (0, preview_api_1.useState)(true), flag = _b[0], setFlag = _b[1];
    if (flag) {
        setFlag(false);
        if (!parameters)
            return storyFn();
        if (parameters[constants_1.PARAM_PRESERVE_KEY] !== true) {
            (0, utils_1.clearCookies)();
        }
        if (parameters[constants_1.PARAM_KEY]) {
            (0, utils_1.setCookies)(parameters.cookie, parameters.cookieEncoding);
        }
    }
    return storyFn();
};
exports.cookieDecorator = cookieDecorator;
