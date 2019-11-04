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



@NgModule({
  declarations: [
    AgendamentoComponent,
	AgendamentoService
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
	HttpClientModule
  ],
  exports: [
	AgendamentoComponent,
  ],
  providers : [
	AgendamentoService
  ]
})
export class LayoutModule { }
