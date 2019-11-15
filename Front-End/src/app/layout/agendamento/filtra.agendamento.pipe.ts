import { Pipe, PipeTransform } from '@angular/core';
import { fadeInItems } from '@angular/material';


@Pipe({
    name : 'filtroAgendamento'
})
export class FiltraAgendamentoPipe implements PipeTransform{
    transform(items: any[], searchText: string): any[]{
        if(!items) return [];
        if(!searchText) return items;
    
    
        searchText = searchText.toLowerCase();

        return items.filter( it => {
            return (it["especialidade"] && it.especialidade.toLowerCase().includes(searchText) ||
                    it["medico"] && it.medico.toLowerCase().includes(searchText));
        });
    }
}