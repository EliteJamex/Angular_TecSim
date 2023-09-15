import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/mainpage.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    MainPageComponent,
    BienvenidaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class PruebasModule { }
