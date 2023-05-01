import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {NgForOf} from "@angular/common";
import {Despesa, TipoDespesa} from "../despesa";
import {DespesaServiceService} from "../despesa.service.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, ReactiveFormsModule, NgForOf],
})
export class Tab1Page {
fg: FormGroup;
tipo: string[];
cor: string;
public alertbotao: any[]=['ok'];
  constructor(private fb: FormBuilder,public dp: DespesaServiceService) {
    this.fg = fb.group({
      motivo: ['', Validators.required],
      valor: [0.0, Validators.required],
      tipo: [TipoDespesa.OUTRO, Validators.required],
      data: [new Date().toISOString()],
      descricao: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.tipo = Object.values(TipoDespesa);
    this.cor = 'Primary';
  }
  adicionar(){
    if(this.fg.status === 'INVALID'){;
      console.log(this.fg.status);
      console.log(this.alertbotao);
    }else{
      this.dp.adicionar(this.fg.value);
    }
  }
  aviso(){
    if(statusInvalido) {
      return {
        header: 'ERRO',
        message: 'Esse campo não pode ser vazio.',
        buttons: [{
          text: 'ok',
          handler: () => {
            console.log('Botão Cancelar pressionado!');
          }
        }
        ]
      }
    }else{
      return {
        header: 'SUCESSO',
        message: 'Item adcinado com sucesso.',
        buttons: [{
          text: 'ok',
          handler: () => {
            console.log('Botão Cancelar pressionado!');
          }
        }
        ]
      }
    }
  }
  ver(){}
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
