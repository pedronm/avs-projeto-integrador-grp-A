
export class Agendamento {
    constructor(
            //public id: string,
            //public matricula?: string,
            //public credenciado?: string,
            public data? : string,
            public horario? : string,
            //public horaFim?: string,
            //public vlPush?: string,
            public especialidade?: string,
            public medico?: string,
            public crm?: string,
            public clinica?: string){}
    public static getAgendamento(agendamento): Agendamento{
        return new Agendamento(
            agendamento.Data,
            agendamento.Horario,
            agendamento.Especialidade,
            agendamento.Medico,
            agendamento.crm,
            agendamento.Clinica
        )
    }
}