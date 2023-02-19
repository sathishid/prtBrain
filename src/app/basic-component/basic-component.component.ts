import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeRequestModel } from '../model/challenge-request-model';
import { SumType } from '../model/sum-type-enum';
import { SumGeneratorService } from '../service/sum-generator.service';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.scss']
})
export class BasicComponentComponent implements OnInit {
  readonly ADD_TYPE = SumType.ADD_TYPE.toString();
  readonly SUB_TYPE = SumType.SUB_TYPE.toString();
  readonly MIXED_TYPE = SumType.MIXED_TYPE.toString();

  //Form control variables
  addSumForm = new FormGroup({
    sumTypeControl: new FormControl(),
    sumCountControl: new FormControl(),
    digitCountControl: new FormControl(),
    rowCountControl: new FormControl()
  })


  statusMessage: string = "";

  constructor(private generatorService: SumGeneratorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  generate() {

    let sumType = this.addSumForm.get("sumTypeControl")?.value;
    let sumCount = this.addSumForm.get("sumCountControl")?.value;
    let digitCount = this.addSumForm.get("digitCountControl")?.value;
    let rowCount = this.addSumForm.get("rowCountControl")?.value;
    let challenge = new ChallengeRequestModel(sumType, sumCount, digitCount, rowCount);
    this.generatorService.generate(challenge);

    this.statusMessage = sumType + "," + sumCount + "," + digitCount + "," + rowCount;

    this.router.navigate(['/sum-viewer']);
  }

}
