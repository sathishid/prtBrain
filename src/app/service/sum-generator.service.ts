import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumGeneratorService {

  constructor() { }
  generate(sumCount:number,rowCount:number,digitCount:number): number[][] {
    var sums: number[][] = [];
    for (let sumIndex = 0; sumIndex < sumCount; sumIndex++) {
      let aSum: number[] = []
      for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        let randomValue = this.uniqueNumberGenerator(digitCount);
        randomValue *= this.negativeValueProbality();
        aSum.push(randomValue);
      }
      sums.push(aSum);
    }
    return sums;
  }
  negativeValueProbality(): number {
    let anyValue = this.uniqueNumberGenerator(9);
    return anyValue % 5 == 0 ? -1 : 1;
  }

  uniqueNumberGenerator(maxValue: number) {
    return Math.floor((Math.random() * maxValue) + 1);
  }
}
