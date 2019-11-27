import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : 'filtroAgendamento'
})
export class FiltroAgendamentoPipe implements PipeTransform{
    transform(items: any[], cmpBusca: string): any[]{
        if(!items) return [];
        if(!cmpBusca) return items;
    
    
        cmpBusca = cmpBusca.toLowerCase();

        return items.filter( it => {
            return (it["Especialidade"] && it.Especialidade.toLowerCase().includes(cmpBusca) ||
                    it["Medico"] && it.Medico.toLowerCase().includes(cmpBusca))||
                    it["Data"] && this.comparaData(it["Data"], cmpBusca) == -1 ||
                    it["Data"] && this.comparaData(it["Data"], cmpBusca) == 1 ;
        });
    }

    /* retirei do site :
        https://expertcodeblog.wordpress.com/2018/03/12/typescript-how-to-compare-two-dates/

        retorna 0 se  for igual, 1 se for mairo e -1 se for menor que a segunda.
    *
    *
    * */
   private comparaData(data, datec){
    let convData = this.splitDatas(data);
    let convDatec = this.splitDatas(datec);
    // com objetos de Date é possível fazer comparações usando os operadores  >, <, <= or >=.
    // o ==, !=, ===, e !== operators precisam usar o método date.getTime(),
    if(!new Date(convData[0],convData[1],convData[2]) && !new Date(convDatec[0],convDatec[1],convDatec[2])){
        return false;
    }
    // É preciso instanciar os objetos com 'new Date()'
    let d1 = new Date(convData[0],convData[1],convData[2]); let d2 = new Date(convDatec[0],convDatec[1],convDatec[2]);

    // cheque se as datas são iguais 
    let same = d1.getTime() === d2.getTime();

    if (same) return 0;
    // checar se a primeira é maior que a segunda 
    //( é o até; e.g. : agendamento: 01/08/2019 | de = 02/08/2019; ou seja, não mostra depois disso)
    if (d1 > d2) return 1;
    // checar se a primeira é maior que a segunda
    //( é o De; e.g. : agendamento: 01/08/2019 | de = 31/07/2019; ou seja, só mostra depois disso)
    if (d1 < d2) return -1;
    
}

private splitDatas(data): number[]{
    
    let datesArray = '';
    let arrayData: number[] = [];
    if(datesArray = data.split('-')){
        datesArray = data.split('-');
        if(datesArray.length > 1){
            arrayData[0] = Number.parseFloat(datesArray[0]);
            arrayData[1] = Number.parseFloat(datesArray[1]);
            arrayData[2] = Number.parseFloat(datesArray[2]);
        }
    }
    if(datesArray = data.split('/')){
        datesArray = data.split('/');
        if(datesArray.length > 1){
           arrayData[0] = Number.parseFloat(datesArray[2]);
           arrayData[1] = Number.parseFloat(datesArray[1]);
           arrayData[2] = Number.parseFloat(datesArray[0]);
        }
    }

    return arrayData;
     //= data.split("-");
    //var theDate = new Date(myDateArray[0],myDateArray[1]-1,myDateArray[2]); 
}

}