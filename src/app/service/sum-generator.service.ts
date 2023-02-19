import { Injectable } from '@angular/core';
import { ChallengeModel } from '../model/challenge-model';
import { ChallengeRequestModel } from '../model/challenge-request-model';

@Injectable({
  providedIn: 'root'
})
export class SumGeneratorService {
  //domain variables
  public challengeModel: ChallengeModel | null = null;

  constructor() { }
  generate(challenge: ChallengeRequestModel) {
    var sums: number[][][] = [];
    var rowCount = challenge.sumCount / 5;
    for (let row = 0; row < rowCount; row++) {
      var aRowOfSum = [];
      for (let sumIndex = 0; sumIndex < 5; sumIndex++) {
        let aSum: number[] = []
        for (let rowIndex = 0; rowIndex < challenge.rowCount; rowIndex++) {
          let randomValue = this.uniqueNumberGenerator(challenge.digitCount);
          randomValue *= this.negativeValueProbality();
          aSum.push(randomValue);
        }
        aRowOfSum.push(aSum);
      }
      sums.push(aRowOfSum);
    }

    this.challengeModel = new ChallengeModel(challenge.sumType,
      challenge.sumCount, challenge.digitCount, challenge.rowCount, sums);
  }
  negativeValueProbality(): number {
    let anyValue = this.uniqueNumberGenerator(9);
    return anyValue % 5 == 0 ? -1 : 1;
  }

  uniqueNumberGenerator(maxValue: number) {
    return Math.floor((Math.random() * maxValue) + 1);
  }
}
