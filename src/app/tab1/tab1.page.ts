import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Amount:number;
  Rate:number;
  Period:number;
  Frequency:number;
  Total:string;

  constructor() {}

  CalculateCompoundReturn()
  {
    this.Total = (this.Amount*(Math.pow(1 + this.Rate/(this.Frequency*100), this.Frequency*this.Period))).toFixed(2);
  }

}
