"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
const color_name_1 = __importDefault(require("color-name"));
const is_url_superb_1 = __importDefault(require("is-url-superb"));
const Node_1 = require("./Node");
const hexRegex = /^#(.+)/;
const colorRegex = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const colorNames = Object.keys(color_name_1.default);
class Word extends Node_1.Node {
    constructor(options) {
        super(options);
        this.isColor = false;
        this.isHex = false;
        this.isUrl = false;
        this.isVariable = false;
        if (!options)
            return;
        const { node } = options;
        this.type = 'word';
        let value = '';
        switch (node.type) {
            case 'Hash':
                ({ value } = node);
                break;
            case 'Identifier':
                value = node.name;
                break;
            default:
        }
        this.value = value;
        this.isColor = colorRegex.test(value) || colorNames.includes(value.toLowerCase());
        this.isHex = hexRegex.test(value);
        this.isUrl = value.startsWith('//') ? (0, is_url_superb_1.default)(`http:${value}`) : (0, is_url_superb_1.default)(value);
        this.isVariable = this.testVariable();
    }
    testVariable() {
        const prefixes = ['--'];
        const varRegex = new RegExp(`^(${prefixes.join('|')})`);
        return varRegex.test(this.value);
    }
}
exports.Word = Word;
//# sourceMappingURL=Word.js.map