import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListaAgendamentosComponent } from './lista-agendamentos/lista-agendamentos.component';



@NgModule({
  declarations: [
    AgendamentoComponent,
    ListaAgendamentosComponent,
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  exports: [
	AgendamentoComponent,
  ]
})
export class LayoutModule { }
