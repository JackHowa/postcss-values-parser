import { Container } from './Container';
import { NodeOptions } from './Node';
export declare class Func extends Container {
    readonly isColor: boolean;
    readonly isVar: boolean;
    readonly name: string;
    constructor(options: NodeOptions);
}
