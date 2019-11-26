import { Component, OnInit } from '@angular/core';
import { CREDENCIADOS } from './mock.credenciado';
import { Router } from "@angular/router";
import { ListaComboService } from '../services/lista.combo.service';
import { Medico } from 'src/app/shared/models/medico.model';
import { AgendamentoService } from '../services/agendamento.service';
import { Credenciado } from 'src/app/shared/models/credenciado.model';

@Component({
  selector: 'app-credenciado',
  templateUrl: './credenciado.component.html',
  styleUrls: ['./credenciado.component.scss']
})
export class CredenciadoComponent implements OnInit {

  public urlIcoClinica : '' ;

  public cabecalho = ['Nome', 'Endereço', ''];
  public dataDe: string;
  public dataAte: string;
  public horario: string;

  public credenciados = [];
  public medicos:Medico[] = [];
  
  public qtdItens = 3;

  constructor(private router: Router,
              private listaComboService: ListaComboService,
              private agendamentoService: AgendamentoService) { }

  ngOnInit() {
    localStorage.setItem('matricula', '1');
    this.carregaMedicos();
    this.carregarCredenciados();
  }

  public carregaMedicos(): void{
    this.listaComboService.listaMedicos()
      .subscribe( retorno => {
        this.medicos = retorno.map(retorno => new Medico(retorno.id,retorno.nome));
      })
  }

  public carregarCredenciados(): void{
    this.listaComboService.listaCredenciados()
      .subscribe( retorno => {
        this.credenciados = retorno.map(retorno =>
          new Credenciado(retorno.id, 
            retorno.nome, 
            this.getListaMedicos(retorno.id),
            retorno.endereco,
            '',
            ''
            ))
      })
  }

  public getListaMedicos(id): string[]{
    let listaFiltrada: string[];
    this.agendamentoService.listaAgendamentos()
      .subscribe(retorno => {
        listaFiltrada = retorno.map(agendamento => {if(agendamento.credenciado == id) return this.medicos.find(retorno => retorno.id == agendamento.medico).nome })
      })
    return listaFiltrada;
  }

  public gotoAgendamentos(credenciado?){
    this.router.navigate(['/agendamento', credenciado.codigo]);
  }

}
