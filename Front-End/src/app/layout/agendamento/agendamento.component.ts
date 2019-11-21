import { Component, OnInit, ViewChild } from '@angular/core';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { AGENDAMENTOS } from './mock.agendamento';
import { FormularioAgendamentoComponent } from 'src/app/shared/formulario-agendamento/formulario-agendamento.component';

declare var $: any;

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  
  @ViewChild('form',{ static: false}) formulario: FormularioAgendamentoComponent = new FormularioAgendamentoComponent();

  public qtdItens = 3;
  public credenciado = "";
  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', 'CRM','Clinica', ''];

  // MOCK DATA LIST
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  public credenciados : string[] = [];
 
  constructor() { }

  ngOnInit() {
  }


}
