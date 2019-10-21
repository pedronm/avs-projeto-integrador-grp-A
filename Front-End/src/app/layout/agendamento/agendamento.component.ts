import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public clinicaSolicitante: string = 'CLN - BOTAFOGO | R. PRINCESA ISABEL, 850';

  constructor() { }

  ngOnInit() {
  }

}
