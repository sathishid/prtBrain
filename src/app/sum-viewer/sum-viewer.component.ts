import { Component, OnInit } from '@angular/core';
import { ChallengeModel } from '../model/challenge-model';
import { SumGeneratorService } from '../service/sum-generator.service';

@Component({
  selector: 'app-sum-viewer',
  templateUrl: './sum-viewer.component.html',
  styleUrls: ['./sum-viewer.component.scss']
})
export class SumViewerComponent implements OnInit {

  challengeModel:ChallengeModel|null=null;
  challenges:number[][][]|undefined;
  constructor(private challengeService: SumGeneratorService) { 
    this.challengeModel=challengeService.challengeModel;
    this.challenges=challengeService.challengeModel?.challenges;
  }

  ngOnInit(): void {
  }

}
