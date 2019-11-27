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
          new Credenciado(retorno.Codigo, 
            retorno.Descricao, 
            retorno.Endereco,
            retorno.contato,
            retorno.Email,
            this.recuperaMedico(retorno.Codigo)
            ))
      })
  }

  public recuperaMedico(codigo): Medico[]{
    let medicos: Medico[];
    this.listaComboService.listaMedicos(codigo)
      .subscribe(retorno => 
        {
          medicos =  retorno.map(medico => Medico.getMedico(medico));
        });
    return medicos != null ? medicos : [] ;

  }
  public gotoAgendamentos(credenciado?){
    this.router.navigate(['/agendamento', credenciado.codigo]);
  }

}
