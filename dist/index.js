"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.parse = exports.nodeToString = exports.registerWalkers = void 0;
const parser_1 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_1.parse; } });
const stringify_1 = require("./stringify");
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return stringify_1.stringify; } });
var walker_1 = require("./walker");
Object.defineProperty(exports, "registerWalkers", { enumerable: true, get: function () { return walker_1.registerWalkers; } });
const nodeToString = (node) => {
    let result = '';
    (0, stringify_1.stringify)(node, (bit) => {
        result += bit;
    });
    return result;
};
exports.nodeToString = nodeToString;
//# sourceMappingURL=index.js.map