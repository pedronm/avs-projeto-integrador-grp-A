import { Component, OnInit } from '@angular/core';
import { CREDENCIADOS } from './mock.credenciado';

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
  public credenciados = CREDENCIADOS;
  
  public qtdItens = 3;

  constructor() { }

  ngOnInit() {
  }

}
