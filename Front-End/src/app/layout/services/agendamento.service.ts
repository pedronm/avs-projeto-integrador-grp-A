import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Agendamento } from '../../shared/models/agendamento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AgendamentoService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient, ){
	}
	
	httpOptions = {
	  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	
	public listaAgendamentos(): Observable<any>{
		return this.http.get<any[]>(this.url+ '/agendamentos')
		.pipe(
			retry(1),
			catchError(this.errorHandler)
		);
	}
	
	public gravaAgendamento(agendamento): Observable<any>{
		return this.http.post<Agendamento>(this.url+ '/agendar/', agendamento, this.httpOptions)
		.pipe(
			retry(1),
			catchError(this.errorHandler)
		); 
	}

	errorHandler(error) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
		  // Cliente
		  errorMessage = error.error.message;
		} else {
		  // Servidor
		  errorMessage = `Mensagem de erro do servidor: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	 }
}