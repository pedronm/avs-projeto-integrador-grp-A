import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { ESPECIALIDADES } from 'src/app/layout/agendamento/mock.especialidade';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEspecialidadeService {

  private api: string = environment.apiUrlEsp;

  constructor(private http: HttpClient) { }

  public listaEspecialidades(): Observable<any>{
    return of(ESPECIALIDADES);
  }
}
