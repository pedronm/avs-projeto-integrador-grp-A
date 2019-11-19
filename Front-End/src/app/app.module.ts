import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormularioAgendamentoComponent } from './shared/formulario-agendamento/formulario-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAgendamentoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
