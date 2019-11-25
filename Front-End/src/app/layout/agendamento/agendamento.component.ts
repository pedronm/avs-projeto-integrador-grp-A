import { Component, OnInit, ViewChild } from '@angular/core';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { AGENDAMENTOS } from './mock.agendamento';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public urlIcoVoltar = "./../../assets/voltar.png";

  public qtdItens = 3;
  public credenciado = "";
  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', 'CRM','Clinica', ''];

  // MOCK DATA LIST
  public agendamentos: Agendamento[] = AGENDAMENTOS;
  public credenciados : string[] = [];

  //
  public medico: string = "";
  public especialidade: string = "";
  public horario: string;
  public dataDe: string;
  public dataAte: string;
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public gotoCredenciado(){
    this.router.navigateByUrl('/credenciado');
  }
}
