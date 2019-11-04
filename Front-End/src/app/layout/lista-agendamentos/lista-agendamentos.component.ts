import { Component, OnInit } from '@angular/core';
import { AGENDAMENTOS } from '../agendamento/mock.agendamento';
import { Agendamento } from '../../shared/models/agendamento.model';

@Component({
  selector: 'app-lista-agendamentos',
  templateUrl: './lista-agendamentos.component.html',
  styleUrls: ['./lista-agendamentos.component.scss']
})
export class ListaAgendamentosComponent implements OnInit {

  public cabecalho: string[] = [];
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  public pageSize = 3;
  constructor() { }

  ngOnInit() {
    this.montarTela();
  }

  private montarTela(): void{
    this.cabecalho = ['Data', 'Horario', 'Especialidade', 'Medico', 'Clinica'];
  }
}
