import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : 'filtroCredenciado'
})
export class FiltroCredenciadoPipe implements PipeTransform{
    transform(items: any[], cmpBusca: string): any[]{
        if(!items) return [];
        if(!cmpBusca) return items;
    
    
        cmpBusca = cmpBusca.toLowerCase();

        return items.filter( it => {
            return (it["descricao"] && it.descricao.toLowerCase().includes(cmpBusca))             
        });
    }

}