"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const postcss_1 = require("postcss");
const stringify_1 = require("../stringify");
class Container extends postcss_1.Container {
    constructor(options) {
        super({});
        this.value = '';
        if (!this.nodes)
            this.nodes = [];
        if (!options)
            return;
        const { end, source, start } = options.node.loc;
        this.source = { end, input: new postcss_1.Input(source), start };
    }
    add(node) {
        return this.push(node);
    }
    toString(stringifier = stringify_1.stringify) {
        return super.toString(stringifier || {});
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map