import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <header>
      <div class="h-50 d-inline-block my-3"> </div>
    </header>    
    <main>
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <router-outlet></router-outlet>
        </div>        
      </div>      
    </main>
   
    <footer class="text-center">
      Agendamento de Consultas V1.0.0
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'agendamento-consultas';
}
