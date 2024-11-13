import { Node, NodeOptions } from './Node';
export declare class Word extends Node {
    readonly isColor: boolean;
    readonly isHex: boolean;
    readonly isUrl: boolean;
    readonly isVariable: boolean;
    constructor(options?: NodeOptions);
    testVariable(): boolean;
}
