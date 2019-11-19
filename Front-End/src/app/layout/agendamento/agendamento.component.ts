import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { AGENDAMENTOS } from './mock.agendamento';

declare var $: any;

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  
  public urlIcoClinica = './../../assets/clinica.png';

  public dataEscolhida: string = "2003-07-21";
  public horario: string = "09:00:00";
  public qtdItens = 3;

  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', 'CRM','Clinica', ''];

  // Propriedades do Agendamento
  public credenciado: string = '';
  public medico: string = "";
  public especialidade: string = "";

  // MOCK DATA LIST
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  public credenciados : string[] = [];
 
  constructor() { }

  ngOnInit() {
  }


}
