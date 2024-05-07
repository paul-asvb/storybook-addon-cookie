"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelContent = void 0;
var react_1 = __importStar(require("react"));
var manager_api_1 = require("@storybook/manager-api");
var icons_1 = __importDefault(require("@storybook/icons"));
var blocks_1 = require("@storybook/blocks");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
var PanelContent = function () {
    var path = (0, manager_api_1.useStorybookState)().path;
    var defaultCookie = (0, manager_api_1.useParameter)(constants_1.PARAM_KEY, {});
    var encoding = (0, manager_api_1.useParameter)(constants_1.PARAM_ENCONDING_KEY, false);
    var _a = (0, react_1.useState)(path), story = _a[0], setStory = _a[1];
    var _b = (0, react_1.useState)(), value = _b[0], setValue = _b[1];
    var _c = (0, manager_api_1.useGlobals)(), globals = _c[0], updateGlobals = _c[1];
    if (path !== story && value) {
        setStory(path);
        setValue(defaultCookie);
    }
    var handleChange = function (newValue) {
        (0, utils_1.clearCookies)();
        (0, utils_1.setCookies)(newValue, encoding);
        setValue(newValue);
        updateGlobals(__assign({}, globals));
    };
    var handleClear = function () {
        (0, utils_1.clearCookies)();
        setValue({});
        updateGlobals(__assign({}, globals));
    };
    return (react_1.default.createElement("div", { style: { padding: '10px 20px' } },
        react_1.default.createElement("button", { style: { marginBottom: '5px' }, onClick: handleClear },
            react_1.default.createElement(icons_1.default.TrashIcon, { style: { marginRight: '5px' } }),
            "Clear All Cookies"),
        react_1.default.createElement(blocks_1.ObjectControl, { name: "cookie", onChange: handleChange, value: value || defaultCookie, theme: "" })));
};
exports.PanelContent = PanelContent;
