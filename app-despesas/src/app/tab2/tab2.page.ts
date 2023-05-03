import { Component } from '@angular/core';
import {DespesaServiceService} from "../despesa.service.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  despesas: any[]

  constructor(public dps: DespesaServiceService) {
    this.despesas = [];
  }
  ngOnInit(){
    this.allDespesas();
  }
  allDespesas(){
    this.despesas = this.dps.obterTodas();
    console.log(this.despesas)
    return this.despesas;
  }

}
