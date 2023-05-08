import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {NgForOf, NgIf} from "@angular/common";
import {Despesa, TipoDespesa} from "../despesa";
import {DespesaServiceService} from "../despesa.service.service";
import {Router} from "@angular/router";
import {debounce, debounceTime} from "rxjs";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, ReactiveFormsModule, NgForOf, NgIf],
})
export class Tab1Page {
fg: FormGroup;
tipo: string[];
isStatus: string;
header: string;
avisoTitulo: string;
avisoMensagem: string;
butao: string[];
  constructor(private fb: FormBuilder,public dp: DespesaServiceService, private rt: Router) {
    this.fg = fb.group({
      motivo: [null, [Validators.required, Validators.minLength(5)]],
      valor: [0.0, Validators.required],
      tipo: [TipoDespesa.OUTRO, Validators.required],
      data: [new Date().toISOString()],
      descricao: [null, [Validators.required, Validators.minLength(5)]]
    });
    this.tipo = Object.values(TipoDespesa);
    this.isStatus = this.fg.status;
    this.avisoTitulo = '';
    this.avisoMensagem = '';
    this.header='Aviso';
    this.butao = [''];
  }
  adicionar(){
   let dupl:boolean = this.dp.duplicados(this.fg.value);
    console.log(dupl)
    if(!dupl){
      console.log(dupl)
      console.log('Adcionar == false');
      this.header = 'Erro';
      this.avisoMensagem = 'Campo Vazio';
      this.butao = ['Cancel'];
      return false
    }
    console.log(dupl)
    console.log('Adcionar == True')
    this.avisoMensagem = 'Item adicionado';
    this.header = 'Success';
    this.butao = ['Ok'];
    this.dp.add(this.fg.value);
    return true;

  }
  ver(){
    this.rt.navigate(['/tabs/tab2'])
  }
  limpar(){
    this.fg.setValue({
      motivo: '',
      valor: 0,
      tipo: TipoDespesa.OUTRO,
      data: new Date().toISOString(),
      descricao: ''
      }

    )
  }

}
