import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public dataEscolhida: string = "";
  public clinicaSolicitante: string = 'CLN - BOTAFOGO | R. PRINCESA ISABEL, 850';

  constructor() { }

  ngOnInit() {
  }

}
