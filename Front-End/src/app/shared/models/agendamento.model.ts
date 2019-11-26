
export class Agendamento {
    constructor(
            public id: string,
            public matricula?: string,
            public credenciado?: string,
            public data? : string,
            public horaInicio? : string,
            public horaFim?: string,
            public vlPush?: string,
            public especialidade?: string,
            public medico?: string,){}
}