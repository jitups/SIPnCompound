import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Amount:number;
  Rate:number;
  Period:number;
  Total:string;

  constructor() {}

  CalculateSIPReturn()
  {
    let InterestForAnnualFrequency:number;
    InterestForAnnualFrequency = (this.Rate/100)/12;
    this.Total = (this.Amount * (Math.pow((1+ InterestForAnnualFrequency),this.Period)-1)/InterestForAnnualFrequency*(1+InterestForAnnualFrequency)).toFixed(2);
  }

}
