import { SumType } from "./sum-type-enum";

export class ChallengeModel {

    
    constructor(private _sumType: SumType,
        private readonly _sumCount: number,
        private readonly _digitCount: number,
        private readonly _rowCount: number,
        private readonly _challenges:number[][][]|undefined) {        
    }

    public get sumType() {
        return this._sumType;
    }
    public get sumCount() {
        return this._sumCount;
    }

    public get digitCount() {
        return this._digitCount;
    }

    public get rowCount() {
        return this._rowCount;
    }

    public get challenges() {
        return this._challenges;
    }

}