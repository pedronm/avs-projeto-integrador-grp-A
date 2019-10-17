import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CalendarioComponent } from './calendario/calendario.component';



@NgModule({
  declarations: [
    AgendamentoComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
