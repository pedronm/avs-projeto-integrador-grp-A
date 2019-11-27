import { Pipe, PipeTransform } from '@angular/core';
import { ListaComboService } from './../services/lista.combo.service';
import { Medico } from 'src/app/shared/models/medico.model';

@Pipe({
    name : 'filtroCredenciado'
})
export class FiltroCredenciadoPipe implements PipeTransform{

    constructor(private listas : ListaComboService){}
    transform(items: any[], cmpBusca: string): any[]{
        if(!items) return [];
        if(!cmpBusca) return items;
    
    
        cmpBusca = cmpBusca.toLowerCase();

        return items.filter( it => {
            return (it["descricao"] && it.descricao.toLowerCase().includes(cmpBusca)) 
                    //||(this.procuraMedicosComCodCredenciado(it["codigo"], cmpBusca))             
        });
    }

    /*private procuraMedicosComCodCredenciado(codigo,campoMed): boolean{
        let medicos: Medico[] = [];
        this.listas.listaMedicos(codigo)
          .subscribe(retorno => 
            {
              medicos =  retorno.map(medico => 
                {
                    if(medico == campoMed){
                        Medico.getMedico(medico)
                    }
                })
            }, err => {
                medicos = [];
            });
        return (medicos.length > 0)
    }*/

}