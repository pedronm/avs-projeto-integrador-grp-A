import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Agendamento } from '../../shared/models/agendamento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AgendamentoService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient, ){
	}
	
	httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	
	public listaAgendamentos(): Observable<any>{
		return this.http.get<Agendamento[]>(this.url+ 'agendamentos');
	}
	
	public gravaAgendamento(agendamento): Observable<any>{
		return this.http.post<Agendamento>(this.url+ 'agendar', agendamento, this.httpOptions); 
	}
}