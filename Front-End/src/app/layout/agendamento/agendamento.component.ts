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
  public credenciado : Credenciado = new Credenciado() ;
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
      let id = params.get("id");   
      this.listaComboService.listaCredenciados(id).subscribe(retorno => {
        retorno.map(credenciado => {if(credenciado.Codigo == id){
          this.credenciado = credenciado;
        }});
      });
      
    })

    this.carregarMedicos();
    this.carregarAgendamentos();
  }

  public carregarMedicos(): void{
    this.listaComboService.listaMedicos()
    .subscribe( retorno => {
      this.medicos = retorno.map(medico => Medico.getMedico(medico));
    })
  }

  public carregarAgendamentos(): void{
    this.agendamentoService.listaAgendamentos()
      .subscribe( retorno => {
        this.agendamentos = retorno
          .map( agendamento => {
            if(agendamento.Clinica === this.credenciado.Descricao) {
              Agendamento.getAgendamento(agendamento)                                                                 
          }
        })
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
        this.agendamentos = [...this.agendamentos];
      }, err => {
        console.log('Falhou!');
      });
  }

}
