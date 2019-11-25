import { Component, OnInit, ViewChild } from '@angular/core';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AgendamentoService } from '../services/agendamento.service';
import { ListaComboService } from '../services/lista.combo.service';

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
  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', ''];

  // MOCK DATA LIST
  public agendamentos: Agendamento[] = [];
  public credenciados : string[] = [];

  //
  public medico: string = "";
  public especialidade: string = "";
  public horario: string;
  public dataDe: string;
  public dataAte: string;
 
  constructor(private router: Router, 
              private activeRoute: ActivatedRoute ,
              private agendamentoService: AgendamentoService,
              private listaComboService: ListaComboService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( params => {
      this.credenciado = params.get("id");
    })

    this.carregarAgendamentos();
  }

  public carregarAgendamentos(): void{
    this.agendamentoService.listaAgendamentos()
      .subscribe( retorno => {
        console.log('Entrando no subscribe' + retorno);
        this.agendamentos = retorno.map( obj => this.populateAgendamento(obj))
      }, err => {
        this.agendamentos = []
        console.log("Erro ao buscar os agendamentos! ")
      })
      
  }

  public populateAgendamento(agendamento: any): Agendamento{
    return new Agendamento(agendamento.nr_matricula,
                           this.listaComboService.buscaCredenciado(agendamento.cd_credenciado),
                           agendamento.dt_agenda,
                           agendamento.hr_inicio,
                           agendamento.hr_fim,
                           agendamento.vl_push,
                           this.listaComboService.buscaEspecialidade(agendamento.cd_especialidade),
                           this.listaComboService.buscaMedico(agendamento.cd_medico));
  }
  public gotoCredenciado(){
    this.router.navigateByUrl('/credenciado');
  }

  public agendar() : void
  {
    
  }

}
