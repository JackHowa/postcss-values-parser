import { parse } from './parser';
import { stringify } from './stringify';
export { registerWalkers } from './walker';
interface Builder {
    (part: string, node?: Node, type?: 'start' | 'end'): void;
}
export interface InterpolationOptions {
    prefix: string;
}
export interface ParseOptions {
    ignoreUnknownWords?: boolean;
    interpolation?: boolean | InterpolationOptions;
    variables?: VariablesOptions;
}
export interface Stringifier {
    (node: Node, builder: Builder): void;
}
export interface VariablesOptions {
    prefixes: string[];
}
export declare const nodeToString: (node: any) => string;
export { parse, stringify };
