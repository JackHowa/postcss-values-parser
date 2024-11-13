"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.ValuesStringifier = void 0;
const stringifier_1 = __importDefault(require("postcss/lib/stringifier"));
class ValuesStringifier extends stringifier_1.default {
    basic(node, value = null) {
        const print = value || node.value;
        const after = node.raws.after ? this.raw(node, 'after') || '' : '';
        this.builder(print, node, 'start');
        this.builder(after, node, 'end');
    }
    atword(...args) {
        this.atrule(...args);
    }
    comment(node) {
        if (node.inline) {
            const left = this.raw(node, 'left', 'commentLeft');
            const right = this.raw(node, 'right', 'commentRight');
            this.builder(`//${left}${node.text}${right}`, node);
        }
        else {
            super.comment(node);
        }
    }
    func(node) {
        const after = this.raw(node, 'after') || '';
        this.builder(`${node.name}(`, node, 'start');
        for (const child of node.nodes) {
            const before = child.raws.before ? this.raw(child, 'before') : '';
            if (before) {
                this.builder(before);
            }
            this.stringify(child);
        }
        this.builder(`)${after}`, node, 'end');
    }
    interpolation(node) {
        this.basic(node, node.prefix + node.params);
    }
    numeric(node) {
        const print = node.value + node.unit;
        this.basic(node, print);
    }
    operator(node) {
        this.basic(node);
    }
    parens(node) {
        this.basic(node);
    }
    punctuation(node) {
        this.basic(node);
    }
    quoted(node) {
        this.basic(node);
    }
    unicodeRange(node) {
        this.basic(node);
    }
    word(node) {
        this.basic(node);
    }
}
exports.ValuesStringifier = ValuesStringifier;
const stringify = (node, builder) => {
    const stringifier = new ValuesStringifier(builder);
    stringifier.stringify(node);
};
exports.stringify = stringify;
//# sourceMappingURL=stringify.js.map