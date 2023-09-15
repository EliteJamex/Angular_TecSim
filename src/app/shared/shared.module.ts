import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProcedimientosComponent } from './components/procedimientos/procedimientos.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ProcedimientosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
