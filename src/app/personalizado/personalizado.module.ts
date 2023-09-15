import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { PersonalizadoMainPageComponent } from './pages/personalizado-mainpage.component';



@NgModule({
  declarations: [
    PersonalizadoMainPageComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PersonalizadoMainPageComponent
  ]
})
export class PersonalizadoModule { }
