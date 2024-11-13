import { AnyNode, Builder } from 'postcss';
import Stringifier from 'postcss/lib/stringifier';
export declare class ValuesStringifier extends Stringifier {
    basic(node: AnyNode, value?: null): void;
    atword(...args: any): void;
    comment(node: any): void;
    func(node: any): void;
    interpolation(node: any): void;
    numeric(node: any): void;
    operator(node: any): void;
    parens(node: any): void;
    punctuation(node: any): void;
    quoted(node: any): void;
    unicodeRange(node: any): void;
    word(node: any): void;
}
export declare const stringify: (node: any, builder: Builder) => void;
