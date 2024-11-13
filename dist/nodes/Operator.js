"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator = void 0;
const Node_1 = require("./Node");
class Operator extends Node_1.Node {
    constructor(options) {
        super(options);
        this.type = 'operator';
        this.value = options.node.value;
    }
}
exports.Operator = Operator;
//# sourceMappingURL=Operator.js.map