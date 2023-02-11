import { Component, OnInit } from '@angular/core';
import { SumGeneratorService } from '../service/sum-generator.service';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.scss']
})
export class BasicComponentComponent implements OnInit {

  private sums: number[][] = [];
  statusMessage: string = "";
  
  constructor(private generatorService:SumGeneratorService) { }

  ngOnInit(): void {
  }

  generate(){
    this.sums=this.generatorService.generate(5,10,9);
    console.log(this.sums);
    this.statusMessage=this.sums.toString();
  }

}
