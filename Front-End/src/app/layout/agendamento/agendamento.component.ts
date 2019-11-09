import { Component, OnInit, ViewChild } from '@angular/core';
import { Medico } from 'src/app/shared/models/medico.model';
import { MEDICOS } from './mock.medico';
import { Especialidade } from 'src/app/shared/models/especialidade.model';
import { ESPECIALIDADES } from './mock.especialidade';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { AGENDAMENTOS } from './mock.agendamento';

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

  // MOCK DATA LIST
  public medico: string = "";
  public especialidade: string = "";
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  constructor() { }

  ngOnInit() {
  }

  public abrirModal(): void {

  }

}
 