import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public platform:Platform) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
          navigator['app'].exitApp();                
      });
  });
  }

}
