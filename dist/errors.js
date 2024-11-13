"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseError = exports.AstError = void 0;
class BaseError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
class AstError extends BaseError {
    constructor() {
        super('ERR_PARSE_AST', `The result AST contained no children, parsing has failed`);
    }
}
exports.AstError = AstError;
class ParseError extends BaseError {
    constructor(error) {
        super('ERR_PARSE', `An error occurred while parsing the css value:\n${error.toString()}`);
    }
}
exports.ParseError = ParseError;
//# sourceMappingURL=errors.js.map