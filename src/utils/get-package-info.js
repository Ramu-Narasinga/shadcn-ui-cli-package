"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageInfo = getPackageInfo;
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
function getPackageInfo() {
    var packageJsonPath = path_1.default.join("package.json");
    return fs_extra_1.default.readJSONSync(packageJsonPath);
}
