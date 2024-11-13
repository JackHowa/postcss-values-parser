import { Container as PostCssContainer } from 'postcss';
import { Node, NodeOptions } from './Node';
export declare class Container extends PostCssContainer {
    readonly value: string;
    constructor(options?: NodeOptions);
    add(node: Container | Node): this;
    toString(stringifier?: (node: any, builder: import("postcss").Builder) => void): string;
}
