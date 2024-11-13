"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numeric = void 0;
const Node_1 = require("./Node");
class Numeric extends Node_1.Node {
    constructor(options) {
        super(options);
        this.type = 'numeric';
        this.unit = options.node.type === 'Dimension' ? options.node.unit : '';
        this.value = options.node.value;
    }
}
exports.Numeric = Numeric;
//# sourceMappingURL=Numeric.js.map