import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Medico } from '../../shared/models/medico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber, of } from 'rxjs';
import { filter, find } from 'rxjs/operators';
import { Credenciado } from 'src/app/shared/models/credenciado.model';
import { MEDICOS } from '../agendamento/mock.medico';
import { CREDENCIADOS } from '../credenciado/mock.credenciado';

@Injectable({
	providedIn: 'root'
})
export class ListaComboService {

	private url : string =  environment.urlApi ;

	constructor( private http: HttpClient,){
	}

	public listaMedicos(id?): Observable<any>{
		if(id){
			return this.http.get<Medico[]>(this.url + `/credenciados/${id}/medicos`)
		}
		else{
			return this.http.get<Medico[]>(this.url+ '/medicos');
		}
			
		//return of(MEDICOS);
	}

	public listaCredenciados(id?: string): Observable<any>{
		return this.http.get<Credenciado[]>(this.url+ '/credenciados');		
		//return of(CREDENCIADOS);
	}
	
};