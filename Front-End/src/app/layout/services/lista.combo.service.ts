import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Medico } from '../../shared/models/medico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ListaComboService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient, private httpHeader: Headers){
	}
	
	public buscaEspecialidade(codigo): string{
		let nomeEspecialidade: string;
		this.listaEspecialidade().subscribe(retorno => {
			if(retorno.cd_especialidade == codigo)
			{
				nomeEspecialidade = retorno.especialidade;
			}
		})
		return nomeEspecialidade;
	}

	public buscaCredenciado(codigo): string{
		let nomeCredenciado: string;
		this.listaCredenciados().subscribe(retorno =>
			{
				if(retorno.cd_credenciado == codigo)
				{
					nomeCredenciado = retorno.credenciado;
				}
			})
		return nomeCredenciado;
	}

	public buscaMedico(codigo):string {
		let nomeMedico:string;
		this.listaMedicos().subscribe(retorno =>
			{
				if(retorno.cd_medico == codigo ){
					nomeMedico = retorno.medico
				}
			});
		return nomeMedico;
	}
	
	public listaEspecialidade(): Observable<any>{
		return null
	}

	public listaMedicos(): Observable<any>{
		return this.http.get<Medico[]>(this.url+ 'medicos');
	}

	public listaCredenciados(): Observable<any>{
		return null;
	}
	
}