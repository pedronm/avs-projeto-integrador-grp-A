import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from './shared/sharedmodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CredenciadoComponent } from './layout/credenciado/credenciado.component';
import { AgendamentoComponent } from './layout/agendamento/agendamento.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

const routes: Routes = [
  {path:'credenciado', component: CredenciadoComponent},
  {path:'agendamento', component: AgendamentoComponent,},
  {path:'', redirectTo: '/credenciado', pathMatch:'full'},
  //{path:'**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,   
  ],  
  imports: [
    BrowserAnimationsModule,
	  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgxMaskModule.forRoot(options),
    SharedModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),    
  ],
  exports: [    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
