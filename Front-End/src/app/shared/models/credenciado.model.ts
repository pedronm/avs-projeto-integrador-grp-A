import { Medico } from './medico.model';

export class Credenciado{
    constructor(
        public Codigo?: string,
        public Descricao?: string,
        public Endereco?: string,
        public Contato?: string[],
        public Email?: string,
        ){};
}