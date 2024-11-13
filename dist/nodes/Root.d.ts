import { Root as PostCssRoot } from 'postcss';
import { Node } from './Node';
export declare class Root extends PostCssRoot {
    readonly value = "";
    add(node: Node): this;
    toString(stringifier?: (node: any, builder: import("postcss").Builder) => void): string;
}
