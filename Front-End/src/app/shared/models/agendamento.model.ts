
export class Agendamento {
    constructor(
            public nr_matricula?: string,
            public credenciado?: string,
            public data? : string,
            public horaInicio? : string,
            public horaFim?: string,
            public vlPush?: string,
            public especialidade?: string,
            public medico?: string,){}
}