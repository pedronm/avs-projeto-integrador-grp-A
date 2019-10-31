import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { MEDICOS } from 'src/app/layout/agendamento/mock.medico';
import { ESPECIALIDADES } from 'src/app/layout/agendamento/mock.especialidade';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMedicoService{

  private api: string = environment.apiUrlMed;

  constructor(private http: HttpClient ) { }
  
  public recuperaListaMedicos(): Observable<any> {
    return of(MEDICOS);
  } 

  
}
