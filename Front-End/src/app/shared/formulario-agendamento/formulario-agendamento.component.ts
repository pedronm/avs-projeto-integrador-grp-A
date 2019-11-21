import { Component, OnInit } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-formulario-agendamento',
  templateUrl: './formulario-agendamento.component.html',
  styleUrls: ['./formulario-agendamento.component.scss']
})
export class FormularioAgendamentoComponent implements OnInit {


  // Propriedades do Agendamento
  public credenciado: string = '';
  public medico: string = "";
  public especialidade: string = "";
  public horario: string = "";
  public data: string = "";

  constructor() { }

  ngOnInit() {
  }

  public getMascaraData(): string{
    return '/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i';
  }
  
  public getMascaraHora(): string{
    return 'Hh:m0'
  }
}
