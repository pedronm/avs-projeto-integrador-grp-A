import { Component, OnInit,  } from '@angular/core';
import { Agendamento } from 'src/app/shared/models/agendamento.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AgendamentoService } from '../services/agendamento.service';
import { ListaComboService } from '../services/lista.combo.service';
import { Medico } from 'src/app/shared/models/medico.model';
import { Credenciado } from 'src/app/shared/models/credenciado.model';

declare var $: any;

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public urlIcoVoltar = "./../../assets/voltar.png";

  public matricula: string;
  public qtdItens = 3;
  public credenciado = "";
  public cabecalho: string[] = ['Data', 'Horario', 'Especialidade', 'Medico', ''];

  // MOCK DATA LIST
  public agendamentos: Agendamento[] = [];
  public credenciados : Credenciado[] = [];
  public medicos: Medico[] = [];

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
    this.matricula = localStorage.getItem('matricula');
    this.activeRoute.paramMap.subscribe( params => {
      this.credenciado = params.get("id");
    })

    this.carregarMedicos();
    this.carregaCredenciados();
    this.carregarAgendamentos();
  }

  public carregarMedicos(): void{
    this.listaComboService.listaMedicos()
    .subscribe( retorno => {
      this.medicos = retorno.map(medico => new Medico(medico.id, medico.nome));
    })
  }

  public carregaCredenciados(): void{
    this.listaComboService.listaCredenciados()
      .subscribe( retorno => {
        this.credenciados = retorno
        .map(credenciado => new Credenciado(credenciado.id, credenciado.nome, credenciado.endereco, '', ''))
      });
    this.credenciado = this.credenciados.find(credenciado => credenciado.codigo == this.credenciado).descricao;
  }

  public carregarAgendamentos(): void{
    this.agendamentoService.listaAgendamentos()
      .subscribe( retorno => {
        this.agendamentos = retorno.map( obj => new Agendamento ( obj.id,
                                                    obj.matricula,
                                                    obj.credenciado,
                                                    obj.data,
                                                    obj.horaInicio,
                                                    obj.horaFim,
                                                    '',
                                                    obj.especialidade,
                                                    this.medicos.find(medico => medico.id == obj.medico).nome,))
                                    .filter(retorno => retorno.matricula == '')
                                    
                                
      }, err => {
        this.agendamentos = []
      })
      
  }

  public gotoCredenciado(){
    this.router.navigateByUrl('/credenciado');
  }

  public agendar(agendamento) : void
  {
    this.agendamentoService.agendar(agendamento, this.matricula)
      .subscribe(retorno => {
        console.log(retorno);
        console.log('Sucesso!');
      }, err => {
        console.log('Falhou!');
      });
  }

}
