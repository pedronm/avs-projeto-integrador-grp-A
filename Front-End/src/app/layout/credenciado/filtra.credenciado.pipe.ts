import { Pipe, PipeTransform } from '@angular/core';
import { fadeInItems } from '@angular/material';


@Pipe({
    name : 'filtroCredenciado'
})
export class FiltraCredenciadoPipe implements PipeTransform{
    
    transform(items: any[], cmpBusca: string): any[]{
        if(!items) return [];
        if(!cmpBusca) return items;
    
    
        cmpBusca = cmpBusca.toLowerCase();

        return items.filter( it => {
            return (it["especialidade"] && it.especialidade.toLowerCase().includes(cmpBusca) ||
                    it["medico"] && it.medico.toLowerCase().includes(cmpBusca)) ||
                    (it["dataDe"] && this.comparaData(it["dataDe"], cmpBusca) == 1 
                        &&
                    it["dataAte"] && this.comparaData(it["dataAte"], cmpBusca));
        });
    }

    /* retirei do site :
        https://expertcodeblog.wordpress.com/2018/03/12/typescript-how-to-compare-two-dates/

        retorna 0 se  for igual, 1 se for mairo e -1 se for menor que a segunda.
    *
    *
    * */
    private comparaData(data, datec){
        // com objetos de Date é possível fazer comparações usando os operadores  >, <, <= or >=.
        // o ==, !=, ===, e !== operators precisam usar o método date.getTime(),
        
        // É preciso instanciar os objetos com 'new Date()'
        let d1 = new Date(data); let d2 = new Date(datec);

        // cheque se as datas são iguais 
        let same = d1.getTime() === d2.getTime();
        if (same) return 0;

        // checar se a primeira é maior que a segunda
        if (d1 > d2) return 1;
        
        // checar se a primeira é maior que a terceira
        if (d1 < d2) return -1;
    }

}