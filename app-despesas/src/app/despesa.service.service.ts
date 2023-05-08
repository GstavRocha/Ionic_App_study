import {Injectable, OnDestroy} from '@angular/core';
import {Despesa} from "./despesa";
import {FormControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class DespesaServiceService{
  buscaEntrada = new FormControl;
  despesas: Despesa[]
  ultimoAdd: Date;

  constructor() {
    this.despesas = [];
    this.ultimoAdd = new Date();

  }
  duplicados(dsp: Despesa){
    return !(dsp.motivo === null && dsp.descricao === null);
    }

  add(dsp: Despesa){
    if(dsp !== null && !this.duplicados(dsp)){
      this.despesas.push(dsp);
      return true;
    }
    return false;
    }
    allDespesas(): Despesa[]{
    console.log(this.despesas)
    return this.despesas;
    }
}



