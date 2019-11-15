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
  public qtdItens = 0;

  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', 'CRM','Clinica', ''];

  // MOCK DATA LIST
  public medico: string = "";
  public especialidade: string = "";
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  constructor() { }

  ngOnInit() {
    this.qtdItens = this.measureAgendamentosSize(3,10);
  }

  //public abrirModal(): void {
  //  $('#modal-credenciado').modal('show');
  //}

  private measureAgendamentosSize(quantidade, maxima) : number{
    return this.agendamentos.length > 3 ? quantidade : maxima;
  }

}
 