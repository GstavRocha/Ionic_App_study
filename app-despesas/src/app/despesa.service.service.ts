import { Injectable } from '@angular/core';
import {Despesa} from "./despesa";

@Injectable({
  providedIn: 'root'
})
export class DespesaServiceService {
  despesas: Despesa[]

  constructor() {
    this.despesas = [];
  }
  adicionar(desp: Despesa): boolean{
    if( desp != null){
      this.despesas.push(desp);
      console.log(this.despesas)
      return true;
    }
    return false;
  }
  obterTodas(): Despesa[]{
    return this.despesas
  }
}
