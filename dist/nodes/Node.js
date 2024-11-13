"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const postcss_1 = require("postcss");
const stringify_1 = require("../stringify");
class Node extends postcss_1.Node {
    constructor(options) {
        super({});
        this.value = '';
        if (!options)
            return;
        const { end, source, start } = options.node.loc;
        this.source = { end, input: new postcss_1.Input(source), start };
    }
    toString(stringifier = stringify_1.stringify) {
        return super.toString(stringifier || {});
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map