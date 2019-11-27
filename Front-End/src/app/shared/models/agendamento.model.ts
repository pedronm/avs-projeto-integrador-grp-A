
export class Agendamento {
    constructor(
            public data? : string,
            public horario? : string,
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