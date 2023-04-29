import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, ReactiveFormsModule],
})
export class Tab1Page {
fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = fb.group({
      motivo: ['', Validators.required],
      valor: [0.0, Validators.required],
      tipo: ['', Validators.required],
      data: [new Date().toISOString()]
    });
  }
  adicionar(){
    console.log(this.fg.value)
  }
  ver(){}
  limpar(){}

}
