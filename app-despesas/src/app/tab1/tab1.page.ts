import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AlertController, IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {NgForOf, NgIf} from "@angular/common";
import {Despesa, TipoDespesa} from "../despesa";
import {DespesaServiceService} from "../despesa.service.service";
import {Router} from "@angular/router";

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
exibirAviso = false;
avisoTitulo: string;
avisoMensagem: string;
  constructor(private fb: FormBuilder,public dp: DespesaServiceService, private alert: AlertController, private rt: Router) {
    this.fg = fb.group({
      motivo: [null, [Validators.required, Validators.minLength(3)]],
      valor: [0.0, Validators.required],
      tipo: [TipoDespesa.OUTRO, Validators.required],
      data: [new Date().toISOString()],
      descricao: [null, [Validators.required, Validators.minLength(5)]]
    });
    this.tipo = Object.values(TipoDespesa);
    this.isStatus = this.fg.status;
    this.avisoTitulo = '';
    this.avisoMensagem = '';
  }
  async adicionar() {
    const alert = await this.aviso();
    if (this.fg.status === 'INVALID') {
      this.avisoTitulo = 'Erro';
      this.avisoMensagem = 'O formulário não foi preenchido correntamente';
      console.log('Formulário não preenchido corretamente.');
      return this.limpar();
    } else {
      this.avisoTitulo = 'Sucesso';
      this.avisoMensagem = 'Item adicionado!'
      this.dp.adicionar(this.fg.value);
      console.log('Formulário foi preenchido corretamente.');
    }
  }
  async aviso() {
    this.exibirAviso = true;
    const alert = await this.alert.create({
      header: this.avisoTitulo,
      message: this.avisoMensagem,
      buttons: [{
        text: 'OK',
        handler:()=>{
          console.log('Botão pressionado')
        }
      }]
    });
    await alert.present();
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
