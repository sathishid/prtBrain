import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.scss']
})
export class BasicComponentComponent implements OnInit {

  private sums: number[][] = [];
  statusMessage: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  generate() {

    for (let sumIndex = 0; sumIndex < 5; sumIndex++) {
      let aSum: number[] = []
      for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        let randomValue = this.uniqueNumberGenerator(9);
        randomValue *= this.negativeValueProbality();
        aSum.push(randomValue);
      }
      this.sums.push(aSum);
    }
    this.statusMessage = this.sums.toString();
  }
  negativeValueProbality(): number {
    let anyValue = this.uniqueNumberGenerator(9);
    return anyValue % 5 == 0 ? -1 : 1;
  }

  uniqueNumberGenerator(maxValue: number) {
    return Math.floor((Math.random() * maxValue) + 1);
  }


}
