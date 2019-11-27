
export class Agendamento {
    constructor(
            public Data? : string,
            public Horario? : string,
            public Especialidade?: string,
            public Medico?: string,
            public Crm?: string,
            public Clinica?: string){}
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