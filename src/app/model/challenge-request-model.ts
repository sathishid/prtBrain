import { SumType } from "./sum-type-enum";

export class ChallengeRequestModel{
    private _challenges: number[][];
    constructor(private _sumType: SumType,
        private _sumCount: number,
        private _digitCount: number,
        private _rowCount: number) {
            this._challenges=[];
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