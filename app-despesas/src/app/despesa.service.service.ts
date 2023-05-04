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
  duplicados(dsp: Despesa){
    if(dsp.motivo === null && dsp.descricao === null){
      console.log('não verificados no duplicados');
      return false;

    }else{
      if(this.despesas.find((e)=>e.motivo === e.motivo)){
        console.log('Duplicado')
        return false;
      }else{
        this.despesas.push(dsp);
        console.log('Item adicionado')
      }
      return true;
    }
  }
  adicionar(dsp: Despesa): boolean{
    if( dsp != null && dsp.motivo !== null && dsp.descricao !== null){
      this.despesas.push(dsp);
      console.log(this.despesas)
      return true;
    }
    console.log('nao adicionou');
    return false;
  }
  obterTodas(): Despesa[]{
    return this.despesas
  }
}
