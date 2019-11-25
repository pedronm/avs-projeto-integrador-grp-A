import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredenciadoComponent } from './layout/credenciado/credenciado.component';
import { AgendamentoComponent } from './layout/agendamento/agendamento.component';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'credenciado', component: CredenciadoComponent},
  {path:'agendamento/:id', 
   component: AgendamentoComponent,
   canLoad: [AuthGuard]},
  {path:'', redirectTo: '/credenciado', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
