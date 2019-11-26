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
  public credenciado = '';
  
  public qtdItens = 3;

  constructor(private router: Router,
              private listaComboService: ListaComboService,
              private agendamentoService: AgendamentoService) { }

  ngOnInit() {
    localStorage.setItem('matricula', '1');
    this.carregarCredenciados();
  }

  public carregarCredenciados(): void{
    this.listaComboService.listaCredenciados()
      .subscribe( retorno => {
        this.credenciados = retorno.map(retorno =>
          new Credenciado(retorno.id, 
            retorno.nome, 
            retorno.endereco,
            '',
            '',
            ))
      })
  }

  public gotoAgendamentos(credenciado?){
    this.router.navigate(['/agendamento', credenciado.codigo]);
  }

}
