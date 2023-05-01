import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  despesas: any[];
  constructor(private rt: Router) {
    this.despesas =[];
  }
  ver(){
    console.error(this.rt)
    this.rt.navigate(['/tabs/tab2'])
  }

}
