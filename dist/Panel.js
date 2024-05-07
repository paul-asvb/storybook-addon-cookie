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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var react_1 = __importDefault(require("react"));
var components_1 = require("@storybook/components");
var PanelContent_1 = require("./components/PanelContent");
var Panel = function (props) {
    return (react_1.default.createElement(components_1.AddonPanel, __assign({}, props),
        react_1.default.createElement(PanelContent_1.PanelContent, null)));
};
exports.Panel = Panel;
