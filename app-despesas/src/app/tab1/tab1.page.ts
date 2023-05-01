import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AlertController, IonicModule} from "@ionic/angular";
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
isStatus: string;
  constructor(private fb: FormBuilder,public dp: DespesaServiceService, private alert: AlertController) {
    this.fg = fb.group({
      motivo: [null, [Validators.required, Validators.minLength(3)]],
      valor: [0.0, Validators.required],
      tipo: [TipoDespesa.OUTRO, Validators.required],
      data: [new Date().toISOString()],
      descricao: [null, [Validators.required, Validators.minLength(5)]]
    });
    this.tipo = Object.values(TipoDespesa);
    this.isStatus = this.fg.status;
  }
  async aviso() {
    const alert = await this.alert.create({
      header: 'Aviso',
      message: 'Preencha os campos',
      buttons: [{
        text: 'OK',
        handler:()=>{
          console.log('Botão pressionado')
        }
      }]
    });
    return alert; // retorna a instância do HTMLIonAlertElement
  }

  async adicionar() {
    const alert = await this.aviso(); // espera a criação da janela de alerta
    if (this.fg.status === 'INVALID') {
      alert.message = "O item foi adicionado a lista";
      alert.header = "Erro";
      console.log('Formulário não preenchido corretamente.');
      return this.limpar();
    } else {
      const successAlert = await this.alert.create({
        header: 'SUCESSO',
        message: 'ITEM ADICIONADO',
        buttons: [{
          text: 'OK',
          handler:()=>{
            console.log('Botão pressionado')
          }
        }]
      });
      successAlert.present(); // exibe o alerta de sucesso
      console.log('Formulário foi preenchido corretamente.');
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
