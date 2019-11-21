import { NgModule } from '@angular/core';
import { FormularioAgendamentoComponent } from './formulario-agendamento/formulario-agendamento.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  imports:[
    FormsModule,
    NgxMaskModule
  ],
  declarations: [
    FormularioAgendamentoComponent,
  ],
  exports: [
    FormularioAgendamentoComponent
  ]
})
export class SharedModule { }
