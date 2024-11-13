"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
const postcss_1 = require("postcss");
const stringify_1 = require("../stringify");
class Root extends postcss_1.Root {
    constructor() {
        super(...arguments);
        this.value = '';
    }
    add(node) {
        return this.push(node);
    }
    toString(stringifier = stringify_1.stringify) {
        return super.toString(stringifier || {});
    }
}
exports.Root = Root;
//# sourceMappingURL=Root.js.map