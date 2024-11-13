import { CssNode } from 'css-tree';
import { Node as PostCssNode } from 'postcss';
export interface NodeOptions {
    node: CssNode;
}
export declare class Node extends PostCssNode {
    readonly value: string;
    constructor(options?: NodeOptions);
    toString(stringifier?: (node: any, builder: import("postcss").Builder) => void): string;
}
