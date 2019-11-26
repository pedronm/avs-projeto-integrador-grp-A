import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentoService } from './services/agendamento.service';
import { ListaComboService } from './services/lista.combo.service';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltroAgendamentoPipe } from './agendamento/filtro.agendamento.pipe';
import { CredenciadoComponent } from './credenciado/credenciado.component';
import { SharedModule } from '../shared/sharedmodule.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FiltroCredenciadoPipe } from './credenciado/filtro.credenciado.pipe';

@NgModule({
  declarations: [
    AgendamentoComponent,
    FiltroAgendamentoPipe,
    FiltroCredenciadoPipe,
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
    SharedModule,    
    FormsModule,
    NgxMaskModule
  ],
  exports: [
	AgendamentoComponent,
  ],  
  providers : [
  AgendamentoService,
  ListaComboService
  ]
})
export class LayoutModule { }
