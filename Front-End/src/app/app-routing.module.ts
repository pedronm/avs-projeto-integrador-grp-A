import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredenciadoComponent } from './layout/credenciado/credenciado.component';
import { AgendamentoComponent } from './layout/agendamento/agendamento.component';


const routes: Routes = [
  {path:'credenciado', component: CredenciadoComponent},
  {path:'agendamento', component: AgendamentoComponent,},
  {path:'', redirectTo: '/credenciado', pathMatch:'full'},
  //{path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
