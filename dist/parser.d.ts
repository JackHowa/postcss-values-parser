import * as Nodes from './nodes';
export interface ParseOptions {
    ignoreUnknownWords?: boolean;
    interpolation?: boolean | InterpolationOptions;
}
export interface InterpolationOptions {
    prefix: string;
}
export declare const parse: (css: string, opts?: ParseOptions) => Nodes.Root;
