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
exports.registerWalkers = void 0;
const Nodes = __importStar(require("./nodes"));
const registerWalkers = (container) => {
    for (const Constructor of Object.values(Nodes)) {
        let walkerName = `walk${Constructor.name}`;
        if (walkerName.lastIndexOf('s') !== walkerName.length - 1) {
            walkerName += 's';
        }
        if (container.prototype[walkerName]) {
            return;
        }
        container.prototype[walkerName] = function walker(callback) {
            return this.walkType(Constructor, callback);
        };
    }
    container.prototype.walkType = function walkType(type, callback) {
        if (!type || !callback) {
            throw new Error('Parameters {type} and {callback} are required.');
        }
        const isTypeCallable = typeof type === 'function';
        return this.walk((node, index) => {
            if ((isTypeCallable && node instanceof type) || (!isTypeCallable && node.type === type)) {
                return callback.call(this, node, index);
            }
        });
    };
};
exports.registerWalkers = registerWalkers;
//# sourceMappingURL=walker.js.map