declare class BaseError extends Error {
    readonly code: string;
    constructor(code: string, message: string);
}
export declare class AstError extends BaseError {
    constructor();
}
export declare class ParseError extends BaseError {
    constructor(error: any);
}
export {};
