"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicodeRange = void 0;
const Node_1 = require("./Node");
class UnicodeRange extends Node_1.Node {
    constructor(options) {
        super(options);
        this.type = 'unicodeRange';
        this.value = options.node.value;
    }
}
exports.UnicodeRange = UnicodeRange;
//# sourceMappingURL=UnicodeRange.js.map