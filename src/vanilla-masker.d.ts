// Type definitions for vanilla-masker
// Project: https://github.com/BankFacil/vanilla-masker
// Definitions by: Wilson Glasser <https://github.com/wilsonglasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface VanillaMasker {
    maskMoney(options?:any):void;
    maskNumber():void;
    maskAlphaNum():void;
    maskPattern(pattern:any):void;
    unMask():void;
    unbindElementToMask():void;
    bindElementToMask(maskFunction:string):void;

}

export interface VMaskerStatic extends Function {

    new (el?:any):VanillaMasker;
    toMoney(value:number, opts?:any):string;
    toNumber(value:any):number;
    toAlphaNumeric(value:any):string;
    toPattern(value:any, opts?:any):string;
}

interface VanillaMaskerFunction {
     (input: HTMLInputElement): VanillaMasker
}

export declare var VMasker : VanillaMaskerFunction | VMaskerStatic;


// export declare var VMasker: (HTMLInputElement): VanillaMasker =>
