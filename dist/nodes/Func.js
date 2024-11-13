"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Func = void 0;
const Container_1 = require("./Container");
const reColorFunctions = /^(hsla?|hwb|lab|lch|rgba?)$/i;
const reVar = /^var$/i;
class Func extends Container_1.Container {
    constructor(options) {
        super(options);
        this.isColor = false;
        this.isVar = false;
        this.name = '<unknown>';
        this.name = options.node.name;
        this.isColor = reColorFunctions.test(this.name);
        this.isVar = reVar.test(this.name);
        this.type = 'func';
    }
}
exports.Func = Func;
//# sourceMappingURL=Func.js.map