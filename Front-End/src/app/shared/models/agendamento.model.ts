
export class Agendamento {
    constructor(public data? : string,
		    public horario? : string,
            public especialidade?: string,
            public medico?: string,
            public crm?: string,
            public clinica?: string){}
}