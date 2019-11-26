import { Medico } from './medico.model';

export class Credenciado{
    constructor(
        public codigo?: string,
        public descricao?: string,
        public medico?: string[],
        public endereco?: string,
        public contato?: string,
        public email?: string
        ){};
}