export class Medico{
    constructor(public id?: string, 
        public nome?:string,
        public nm_medico?: string,
        public nr_crm?: string,
        public nr_cpf?: string,
        public nr_celular_medico?: string,
        public nr_telefone_medico?: string,
        public ds_email_medico?: string,
        public cd_especialidade?: string){}
    
    public static getMedico(med): Medico{
        return new Medico(med.cd_medico,
        med.nm_medico,
        med.nr_crm,
        med.nr_cpf,
        med.nr_celular_medico,
        med.nr_telefone_medico,
        med.ds_email_medico,
        med.cd_especialidade);
    }
}