import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentoService } from './services/agendamento.service';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FiltraAgendamentoPipe } from './agendamento/filtra.agendamento.pipe';
import { CredenciadoComponent } from './credenciado/credenciado.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AgendamentoComponent,
    FiltraAgendamentoPipe,
    CredenciadoComponent,
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
	  HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    TextMaskModule
  ],
  exports: [
	AgendamentoComponent,
  ],  
  providers : [
	AgendamentoService
  ]
})
export class LayoutModule { }
