import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agendamentos',
  templateUrl: './lista-agendamentos.component.html',
  styleUrls: ['./lista-agendamentos.component.scss']
})
export class ListaAgendamentosComponent implements OnInit {

  public cabecalho: string[] = [];

  constructor() { }

  ngOnInit() {
    this.montarTela();
  }

  private montarTela(): void{
    this.cabecalho = ['Data', 'Especialidade', 'Medico', 'Clinica'];
  }
}
