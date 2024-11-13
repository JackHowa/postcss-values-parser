"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const css_tree_1 = require("css-tree");
const postcss_1 = require("postcss");
const errors_1 = require("./errors");
const Nodes = __importStar(require("./nodes"));
const defaults = {
    ignoreUnknownWords: false,
    interpolation: false
};
const assign = (parent, nodes) => {
    for (const node of nodes) {
        let newNode;
        switch (node.type) {
            case 'Function':
                newNode = new Nodes.Func({ node });
                break;
            case 'Dimension':
            case 'Number':
                newNode = new Nodes.Numeric({ node });
                break;
            case 'Operator':
                newNode = new Nodes.Operator({ node });
                break;
            case 'Parentheses':
                newNode = new Nodes.Parens({ node });
                break;
            case 'UnicodeRange':
                newNode = new Nodes.UnicodeRange({ node });
                break;
            default:
                newNode = new Nodes.Word({ node });
                break;
        }
        const maybeParent = node;
        if (maybeParent.children) {
            let children;
            if (maybeParent.children instanceof css_tree_1.List)
                children = maybeParent.children.toArray();
            else
                ({ children } = maybeParent);
            assign(newNode, children);
        }
        parent.add(newNode);
    }
};
const parse = (css, opts) => {
    const options = Object.assign({}, defaults, opts);
    let ast;
    const root = new Nodes.Root({
        source: {
            input: new postcss_1.Input(css),
            start: { column: 1, line: 1, offset: 0 }
        }
    });
    try {
        ast = (0, css_tree_1.parse)(css, {
            context: 'value',
            positions: true
        });
    }
    catch (error) {
        throw new errors_1.ParseError(error);
    }
    if (!(ast === null || ast === void 0 ? void 0 : ast.children))
        throw new errors_1.AstError();
    const nodes = ast.children.toArray();
    if (!nodes.length)
        throw new errors_1.AstError();
    assign(root, nodes);
    return root;
};
exports.parse = parse;
//# sourceMappingURL=parser.js.map