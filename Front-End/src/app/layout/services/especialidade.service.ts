import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Especialidade } from '../../shared/models/especialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EspecialidadeService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient, ){
	}
	
	public listaEspecialidades(): Observable<any>{
		return this.http.get<Especialidade[]>(this.url+ 'credenciados');
	}
	
}