import { Component, OnInit, ViewChild } from '@angular/core';
import { Medico } from 'src/app/shared/models/medico.model';
import { MEDICOS } from './mock.medico';
import { Especialidade } from 'src/app/shared/models/especialidade.model';
import { ESPECIALIDADES } from './mock.especialidade';
import { AgendamentoService } from 'src/app/shared/services/agendamento.service';
import { ConsultaEspecialidadeService } from 'src/app/shared/services/consulta-especialidade.service';
import { ConsultaMedicoService } from 'src/app/shared/services/consulta-medico.service';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public dataEscolhida: string = "";
  public clinicaSolicitante: string = 'CLN - BOTAFOGO | R. PRINCESA ISABEL, 850';
  public medicos: Medico[] = [];
  public especialidades: Especialidade[] = [];
  
  constructor(public serviceAgendamento: AgendamentoService,
              public serviceEspecialidade: ConsultaEspecialidadeService,
              public serviceMedico: ConsultaMedicoService
              ) { }

  ngOnInit() {
    this.carregaPagina();
  }

  private carregaPagina(): Observable<any>{
    return this.carregaCombos();
  }

  private carregaCombos(): Observable<any>{
    return forkJoin(
      this.montaComboEspecialidades(),
      this.montaComboMedicos()
    )
      

  }

  private montaComboEspecialidades(): any{
    return this.serviceEspecialidade.listaEspecialidades()
      .subscribe(retorno => {
        this.especialidades = retorno;
      });
  }

  private montaComboMedicos(): any{
    return this.serviceMedico.recuperaListaMedicos()
      .subscribe(retorno => {
        this.medicos = retorno;
      });
  }
}
