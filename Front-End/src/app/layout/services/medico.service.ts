import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Medico } from '../../shared/models/medico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MedicoService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient, ){
	}
	
	public listaMedicos(): Observable<any>{
		return this.http.get<Medico[]>(this.url+ 'medicos');
	}
	
}