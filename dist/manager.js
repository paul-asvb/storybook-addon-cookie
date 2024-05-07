"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manager_api_1 = require("@storybook/manager-api");
var constants_1 = require("./constants");
var Panel_1 = require("./Panel");
manager_api_1.addons.register(constants_1.ADDON_ID, function () {
    manager_api_1.addons.add(constants_1.PANEL_ID, {
        type: manager_api_1.types.PANEL,
        title: constants_1.ADDON_TITLE,
        match: function (_a) {
            var viewMode = _a.viewMode;
            return viewMode === 'story';
        },
        render: Panel_1.Panel,
    });
});
